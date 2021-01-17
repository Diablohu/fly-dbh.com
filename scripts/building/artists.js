/**
 * 艺术家信息自动处理脚本
 */

const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const md5 = require('md5');

const locales = require('../../src/locales').map(o => o.code);

/** 存放艺术家数据的目录 */
const dirData = path.resolve(__dirname, '../../data/artists');

/** 存放图片结果的目录 */
const dirSaveTo = path.resolve(__dirname, '../../.data/artists');

/** 重要艺术家的排序，未指定的艺术家将会按名称排序 */
const order = require(path.resolve(dirData, 'featured.js'));

/** 图片尺寸 */
const size = {
    photo: [200, 200],
    work: {
        thumbnail: [75, 75],
        max: [1440, 700],
        card: [180, 360]
    }
};

const nameChunkResampled = `__resampled__`;

// ============================================================================

(async () => {
    await fs.ensureDir(dirSaveTo);
    await fs.emptyDir(dirSaveTo);

    const allArtists = [];

    /** 目前提供的所有类型 */
    const types = (await fs.readdir(dirData))
        .map(filename => path.resolve(dirData, filename))
        .filter(file => fs.lstatSync(file).isDirectory())
        .map(file => ({
            type: path.parse(file).name,
            dir: file
        }));

    // 遍历类型目录
    for (const { type, dir: dirType } of types) {
        /** 该类型下所有的艺术家 */
        const artists = (await fs.readdir(dirType))
            .map(filename => path.resolve(dirType, filename))
            .filter(file => fs.lstatSync(file).isDirectory())
            .map(file => {
                const artist = {
                    type,
                    name: {},
                    bio: {},
                    works: [],
                    dir: file,
                    dirWorks: path.resolve(file, 'works')
                };
                const defaultName = path.parse(file).name;
                const dirBio = path.resolve(file, 'bio');
                const dirName = path.resolve(file, 'name');

                // 处理名字
                artist.id = defaultName;
                // 读取 .md 文件
                fs.readdirSync(dirName)
                    .map(filename => path.resolve(dirName, filename))
                    .filter(file => !fs.lstatSync(file).isDirectory())
                    .filter(file => path.parse(file).ext === '.md')
                    .forEach(file => {
                        const locale = path.parse(file).name;
                        artist.name[locale] = fs
                            .readFileSync(file, 'utf-8')
                            .trim();
                    });
                // 填充其他可用语言
                for (const locale of locales) {
                    if (typeof artist.name[locale] === 'undefined')
                        artist.name[locale] = artist.name.ja || defaultName;
                }

                // 处理介绍
                fs.readdirSync(dirBio)
                    .map(filename => path.resolve(dirBio, filename))
                    .filter(file => !fs.lstatSync(file).isDirectory())
                    .filter(file => path.parse(file).ext === '.md')
                    .forEach(file => {
                        const locale = path.parse(file).name;
                        artist.bio[locale] = fs
                            .readFileSync(file, 'utf-8')
                            .trim();
                    });

                return artist;
            });

        // 处理图片内容
        for (const artist of artists) {
            // 处理照片
            {
                const photo = path.resolve(artist.dir, 'photo.jpg');
                if (fs.existsSync(photo)) {
                    artist.photo = await resample(photo, {
                        size: size.photo,
                        quality: 71
                    });
                } else {
                    delete artist.photo;
                }
            }

            // 处理作品
            {
                artist.works = {
                    originals: [],
                    thumbnails: []
                };
                const works = (await fs.readdir(path.resolve(artist.dirWorks)))
                    .filter(
                        filename =>
                            !new RegExp(
                                `\\.${nameChunkResampled}\\.[0-9.]+x\\.`
                            ).test(filename)
                    )
                    .map(filename => path.resolve(artist.dirWorks, filename))
                    .filter(file => !fs.lstatSync(file).isDirectory())
                    .sort(
                        (a, b) =>
                            fs.lstatSync(b).mtimeMS - fs.lstatSync(a).mtimeMs
                    );
                for (const work of works) {
                    artist.works.originals.push(
                        await resample(work, {
                            size: size.work.max,
                            quality: 91,
                            withoutEnlargement: true,
                            fit: 'contain'
                        })
                    );
                    artist.works.thumbnails.push(
                        await resample(work, {
                            size: size.work.thumbnail,
                            quality: 51
                        })
                    );
                }
                artist.card = await resample(works[0], {
                    size: size.work.card,
                    quality: 61,
                    fit: 'cover',
                    position: 'centre'
                });
            }

            // 清理
            delete artist.dir;
            delete artist.dirWorks;

            // 添加至全部数据
            allArtists.push(artist);
        }
    }

    // 根据重要艺术家排序
    allArtists.sort((a, b) => {
        const getOrder = artist => {
            const index =
                order.indexOf(artist.id) === -1
                    ? order.indexOf(artist.name.ja)
                    : order.indexOf(artist.id);
            if (index === -1) return allArtists.length;
            return index;
        };
        return getOrder(a) - getOrder(b);
    });

    const allArtistsById = allArtists.reduce((o, artist) => {
        o[artist.id] = artist;
        return o;
    }, {});

    // 保存至文件
    await fs.writeFile(
        path.resolve(dirData, 'index.js'),
        `export default ${JSON.stringify(allArtistsById, undefined, 4).replace(
            /"require\(\*\*\*\*(.+?)\*\*\*\*\).default"/g,
            `require("$1").default`
        )}`
    );
})();

// ============================================================================

const resample = async (file, options = {}) => {
    const { size, quality = 71, ...sharpOptions } = options;
    const multipliers = [1, 1.5, 2];
    const result = {};

    for (const multiplier of multipliers) {
        const [width, height] = size.map(value =>
            Math.floor(value * multiplier)
        );
        await sharp(file)
            .resize(width, height, {
                fit: 'cover',
                position: 'attention',
                ...sharpOptions
            })
            .jpeg({
                quality
            })
            .toBuffer({ resolveWithObject: true })
            .then(({ data, info }) => {
                const saveTo = path.resolve(
                    dirSaveTo,
                    `${md5(data)}.${
                        info.format === 'jpeg' ? 'jpg' : info.format
                    }`
                );
                result[`${multiplier}x`] = `require(****${saveTo}****).default`;
                return fs.writeFile(saveTo, data);
            });
        // .toFile(saveTo);
    }

    return result;
};

/**
 * 首页轮播图自动处理脚本
 */

const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const md5 = require('md5');

/** 存放轮播图图片的目录 */
const dirData = path.resolve(__dirname, '../../data/banners/pictures');

/** 存放图片结果的目录 */
const dirSaveTo = path.resolve(__dirname, '../../.data/banners');

/** 图片尺寸 */
const aspectRatio = 4 / 3;
const size = {
    full: [1280, Math.floor(1280 / aspectRatio)],
    blurred: [320, Math.floor(320 / aspectRatio)]
};

// ============================================================================

(async () => {
    await fs.ensureDir(dirSaveTo);
    await fs.emptyDir(dirSaveTo);

    const allBanners = [];

    const files = (await fs.readdir(dirData))
        .map(filename => path.resolve(dirData, filename))
        .filter(file => !fs.lstatSync(file).isDirectory());

    for (const file of files) {
        allBanners.push(await processPicture(file));
    }

    // 保存至文件
    await fs.writeFile(
        path.resolve(dirData, '../index.js'),
        `export default ${JSON.stringify(allBanners, undefined, 4).replace(
            /"require\(\*\*\*\*(.+?)\*\*\*\*\).default"/g,
            `require("$1").default`
        )}`
    );
})();

// ============================================================================

const multipliers = [1, 1.5, 2];
const processPicture = async file => {
    const result = {
        full: {}
        // blurred: undefined
    };

    // 处理全尺寸图片
    for (const multiplier of multipliers) {
        const [width, height] = size.full.map(value =>
            Math.floor(value * multiplier)
        );
        await sharp(file)
            .resize(width, height, {
                fit: 'cover',
                position: 'attention'
            })
            .jpeg({
                quality: 71
            })
            .toBuffer({ resolveWithObject: true })
            .then(({ data, info }) => {
                const saveTo = path.resolve(
                    dirSaveTo,
                    `${md5(data)}.${
                        info.format === 'jpeg' ? 'jpg' : info.format
                    }`
                );
                result.full[
                    `${multiplier}x`
                ] = `require(****${saveTo}****).default`;
                return fs.writeFile(saveTo, data);
            });
    }

    // 处理模糊图片
    await sharp(file)
        .resize(size.blurred[0], size.blurred[1], {
            fit: 'cover',
            position: 'attention'
        })
        .blur(size.blurred[0] / 20)
        .modulate({
            brightness: 0.75
        })
        .jpeg({
            quality: 41
        })
        .toBuffer({ resolveWithObject: true })
        .then(({ data, info }) => {
            // console.log(data.toString('base64'));
            // const saveTo = path.resolve(
            //     dirSaveTo,
            //     `${md5(data)}.${info.format === 'jpeg' ? 'jpg' : info.format}`
            // );
            // result.blurred = `require(****${saveTo}****)`;
            // return fs.writeFile(saveTo, data);
            result.blurred = `data:image/${info.format};base64,${data.toString(
                'base64'
            )}`;
        });

    return result;
};

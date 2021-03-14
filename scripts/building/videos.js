/**
 * 艺术家信息自动处理脚本
 */

const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const md5 = require('md5');
const replaceAsync = require('string-replace-async');

const { videoThumbnail } = require('../../src/constants/folders');

/** 原始数据目录 */
const dirData = path.resolve(__dirname, '../../data');

/** 原始数据文件 */
const fileOriginal = path.resolve(dirData, 'videos.ts');

/** 新的存放目录 */
const dirSaveToData = path.resolve(__dirname, '../../.data');
const dirSaveTo = path.resolve(dirSaveToData, 'videos');

/** 新的宽度 */
const resizeToWidth = 600;

// ============================================================================

(async () => {
    await fs.ensureDir(dirSaveTo);
    await fs.emptyDir(dirSaveTo);
    await fs.ensureDir(path.resolve(dirSaveTo, videoThumbnail));

    const newContent = await replaceAsync(
        await fs.readFile(fileOriginal, 'utf-8'),
        /thumbnailOriginal:(\s*)('|")(.+?)('|"),/g,
        async (match, p1, p2, p3, p4) => {
            const file = path.resolve(dirData, p3);
            const fileNew = await sharp(file)
                .resize(resizeToWidth)
                .jpeg({
                    quality: 61,
                })
                .toBuffer({ resolveWithObject: true })
                .then(async ({ data, info }) => {
                    const saveTo = path.resolve(
                        dirSaveTo,
                        videoThumbnail,
                        `${md5(data)}.${
                            info.format === 'jpeg' ? 'jpg' : info.format
                        }`
                    );
                    await fs.writeFile(saveTo, data);
                    return saveTo;
                });
            const pathname = path
                .relative(dirSaveTo, fileNew)
                .replace(/\\/g, '/');
            return `thumbnail:${p1}'${pathname}',`;
        }
    );

    await fs.writeFile(
        path.resolve(dirSaveToData, 'videos.ts'),
        newContent,
        'utf-8'
    );
})().catch(console.error);

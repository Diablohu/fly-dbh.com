const fs = require('fs-extra');
const path = require('path');
const pngToIco = require('png-to-ico');
const sizeOf = require('image-size');
const sharp = require('sharp');

const { dirs } = require('../../koot.config.js');

const base = {
    // short_name: 'Maps',
    // name: 'Google Maps',
    icons: [],
    start_url: '/?utm_source=web_app_manifest',
    display: 'standalone',
    background_color: '#e60013',
    theme_color: '#e60013'
};
const pathLocales = path.resolve(__dirname, '../../src/locales');
const pathFavicon = path.resolve(__dirname, '../../src/assets/favicon');
const saveTo = dirs.generatedPublicAssets;

const locales = require(path.resolve(pathLocales, 'index.js'));

// ============================================================================

(async () => {
    await fs.ensureDir(saveTo);
    await fs.emptyDir(saveTo);

    // 处理图标
    {
        const favicons = fs
            .readdirSync(pathFavicon)
            .filter(filename => path.parse(filename).ext === '.png')
            .map(filename => path.resolve(pathFavicon, filename));

        for (const file of favicons) {
            const { name, ext } = path.parse(file);
            const newName = `favicon-${name}${ext}`;
            const { width, height } = sizeOf(file);
            // 将图标复制到 public
            await fs.copyFile(file, path.resolve(saveTo, newName));
            // 添加到 manifest
            base.icons.push({
                src: newName,
                type: 'image/png',
                sizes: `${width}x${height}`
            });
        }

        // 将 192x192 转为 180x180
        await sharp(path.resolve(pathFavicon, '192x.png'))
            .resize(180)
            .toFile(path.resolve(saveTo, 'favicon-180x.png'));

        // 将 32x32 转为 16x16
        await sharp(path.resolve(pathFavicon, '32x.png'))
            .resize(16)
            .toFile(path.resolve(saveTo, 'favicon-16x.png'));

        // 将 64x64 转为 ico
        pngToIco(path.resolve(saveTo, 'favicon-64x.png')).then(buf => {
            fs.writeFileSync(path.resolve(saveTo, 'favicon.ico'), buf);
        });
    }

    // 根据语言处理标题并保存
    for (const { code, filename } of locales) {
        const l = require(path.resolve(pathLocales, filename));
        const manifest = {
            ...base,
            name: l.title,
            short_name: l.short_title
        };

        await fs.writeJson(
            path.resolve(saveTo, `manifest-${code}.json`),
            manifest,
            {
                spaces: 4
            }
        );
    }
})();

/**
 * @module kootConfig
 *
 * Koot.js 项目配置
 *
 * 配置文档请查阅: [https://koot.js.org/#/config]
 */

require('koot/typedef');

const fs = require('fs');
const path = require('path');
// const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

const {
    videos,
    // videoThumbnail
} = require('./src/constants/folders');

/** @type {AppConfig} */
module.exports = {
    /**************************************************************************
     * 项目基本信息
     *************************************************************************/
    name: '飞行员大波胡',
    type: 'react',
    dist: './dist',
    template: './src/index.ejs',
    templateInject: './src/index.inject.js',
    i18n: [
        ['zh', './src/locales/zh.js'],
        // ['en', './src/locales/en.js'],
    ],

    /**************************************************************************
     * 路由 & 客户端历史记录
     *************************************************************************/
    routes: './src/routes',

    /**************************************************************************
     * 数据存储 & Store
     *************************************************************************/
    store: './src/store',
    cookiesToStore: 'all',

    /**************************************************************************
     * 客户端设置 & 生命周期
     *************************************************************************/
    icon: './src/assets/app-icon.png',
    webApp: {
        name: '飞行员大波胡',
        shortName: '飞行大波胡',
        description: '【飞行员大波胡 | Sim-Pilot Diablohu】系列视频',
    },

    /**************************************************************************
     * 服务器端设置 & 生命周期
     *************************************************************************/
    port: 8090,
    proxyRequestOrigin: {
        protocol: 'https',
    },
    serverBefore: './src/server/before.js',

    /**************************************************************************
     * 打包 & Webpack
     *************************************************************************/
    beforeBuild: require('./scripts/koot/before-build'),
    afterBuild: require('./scripts/koot/after-build'),
    // ! 请查阅文档中有关 Webpack 设定的注意事项
    // ! https://koot.js.org/#/config?id=webpackconfig
    webpackConfig: async () => ({
        entry: {
            /**
             * 自定入口文件，需要手动编写使用逻辑
             * - 该模板项目中，本 `critical` 入口的结果会被自动写入到 HTML 结果内，位于 `<body>` 标签中所有自动插入的 `<script>` 标签之前
             * - 详见模板文件 `/src/index.ejs` 内的 `<%- content('critical.js') %>`
             */
            critical: [path.resolve(__dirname, './src/critical.js')],

            /**
             * Koot.js 会自动加入一个名为 `client` 的入口，其中包含所有 React 相关逻辑
             * - 模板中的 `<%- inject.scripts %>` 会被自动替换为 `client` 入口的相关内容
             */
        },

        module: {
            rules: [
                /**
                 * Koot.js 会为以下类型的文件自动添加 loader，无需进行配置
                 * - `js` `mjs` `jsx`
                 * - `css` `sass` `less`
                 */
                {
                    test: /\.(ico|gif|jpg|jpeg|png|webp|svg)$/,
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 5 * 1024, // 5kb
                        },
                    },
                },
                {
                    test: /\.(ttf|ttc|eot|woff|woff2|mp4|webm)$/,
                    type: 'asset/resource',
                },
            ],
        },

        // plugins: [
        //     new webpack.EnvironmentPlugin(['SANITY_PROJECT_ID', 'SANITY_DATASET'])
        // ]
    }),
    staticCopyFrom: [
        path.resolve(__dirname, './src/assets/public'),
        path.resolve(videos),
    ],
    internalLoaderOptions: {
        'less-loader': {
            lessOptions: {
                /**************************************************************
                 * Koot.js 在 0.15 之后采用 Less.js v4，其默认的数值计算行为方式有变化。
                 * 以下设置将其强制改回 Less.js v3 的默认方式。同时这也是我们团队内部更加习惯的方式。
                 *
                 * 如果想使用 Less.js v4 的默认方式，只需要将这一行配置移除。
                 *
                 * 有关详情，请查阅 Less.js 官方文档: http://lesscss.org/usage/#less-options-math
                 *************************************************************/
                math: 'always',
            },
        },
    },

    /**************************************************************************
     * 开发环境 & 开发设置
     *************************************************************************/
    aliases: {
        '~AppConfig': path.resolve('./app.config.js'),
        '@/': path.resolve('./src/'),
        '@src': path.resolve('./src'),
        '@api': path.resolve('./src/api'),
        '@assets': path.resolve('./src/assets'),
        '@components': path.resolve('./src/components'),
        '@constants': path.resolve('./src/constants'),
        '@locales': path.resolve('./src/locales'),
        '@routes': path.resolve('./src/routes'),
        '@server': path.resolve('./src/server'),
        '@store': path.resolve('./src/store'),
        '@views': path.resolve('./src/views'),
        '~vars.less': path.resolve('./src/constants/less/_all.less'),
        '@data': path.resolve('./data'),
        '~data': path.resolve('./.data'),
        '@types': path.resolve('./types'),
    },
    defines: {
        __SVG_ICON_PACK__: JSON.stringify(
            fs.readFileSync(
                path.resolve(__dirname, './src/assets/symbol-defs.svg'),
                'utf-8',
            ),
        ).replace(/\n/g, ''),
        ...['SANITY_PROJECT_ID', 'SANITY_DATASET'].reduce((obj, key) => {
            const value = process.env[key];
            if (value) obj[`process.env.${key}`] = JSON.stringify(value);
            return obj;
        }, {}),
    },
    devPort: 3090,

    /**************************************************************************
     * 更多选项请查阅[文档](https://koot.js.org/#/config)
     *************************************************************************/
};

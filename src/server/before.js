/**
 * **服务器端生命周期**
 *
 * _创建 Koa 实例后、挂载任何中间件之前_
 */

import fs from 'fs';
import path from 'path';
import range from 'koa-range';
import mime from 'mime/lite';

import routes from './routes';

const forceLength = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (app) => {
    app.use(range);

    app.use(async (ctx, next) => {
        if (forceLength[ctx.path]) {
            ctx.length = forceLength[ctx.path];
            return next();
        }

        if (ctx.is('video/*') || /^video(\/|$)/.test(mime.getType(ctx.path))) {
            const file = path.resolve(
                global.KOOT_DIST_DIR,
                'public',
                ctx.path.replace(/^(\/|\\)/, '')
            );
            // console.log(
            //     ctx.path,
            //     file,
            //     fs.existsSync(file),
            //     fs.lstatSync(file)
            // );
            // serveAsStream[ctx.path] = fs.createReadStream(file);
            forceLength[ctx.path] = fs.lstatSync(file).size;
            ctx.length = forceLength[ctx.path];
        }

        // if (serveAsStream[ctx.path]) {
        //     ctx.body = serveAsStream[ctx.path];
        //     return;
        // }
        return next();
    });

    // 挂载路由
    app.use(routes);
};

import koaRouter from 'koa-router';
import sanity from './sanity';
import addRoutesHome from './home';
import addRoutesVideos from './videos';

/** @type {Object} 服务器路由对象 (koa-router) */
export const router = koaRouter();

/** @type {Object} 服务器路由表 */
export default router.routes();

// ----------------------------------------------------------------------------

router.get('/api/timestamp', async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.body = {
        ts: Date.now(),
    };
});
addRoutesHome(router);
addRoutesVideos(router);
sanity(router);

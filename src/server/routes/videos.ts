import type Router from 'koa-router';
import type { VideoItem } from '@types';

import { client as sanityClient, projectionVideoListItem } from '../sanity';

/*
tag  name or id
length = 10
start = 0
*/

function addRoutesVideos(router: Router): void {
    router.get('/api/videos', async (ctx) => {
        const {
            tag,
            length = 20,
            start = 0,
        } = ctx.query as {
            tag?: string;
            length?: number;
            start?: number;
        };

        const filter = ['_type == "video"', !!tag && `"${tag}" in tags[]->name`]
            .filter((s) => !!s)
            .join(' && ');

        const [list, total] = await Promise.all([
            sanityClient.fetch<VideoItem>(`
*[${filter}]
| order(release desc)
${projectionVideoListItem}
[${start}...${start + length}]
            `),
            sanityClient.fetch<number>(`count(*[${filter}])`),
        ]);

        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = {
            list,
            total,
        };
    });
}

export default addRoutesVideos;

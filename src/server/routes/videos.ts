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

        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = {
            list: await sanityClient.fetch<VideoItem>(`
*[
${['_type == "video"', !!tag && `"${tag}" in tags[]->name`]
    .filter((s) => !!s)
    .join(' && ')}
]
| order(release desc)
${projectionVideoListItem}
[${start}...${start + length}]
            `),
        };
    });
}

export default addRoutesVideos;

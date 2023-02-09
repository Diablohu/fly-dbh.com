import type Router from 'koa-router';
import type { VideoItem } from '@types';

import { client as sanityClient, projectionVideoListItem } from '../sanity';

function addRoutesHome(router: Router): void {
    router.get('/api/home', async (ctx) => {
        const categories = [
            ['news', 10],
            ['training', 3],
            ['chat', 3],
            ['test', 3],
            ['flight', 3],
            ['danger', 3],
            ['world', 3],
        ];

        const [all, ...listCategories] = await Promise.all([
            sanityClient.fetch<VideoItem>(`
*[_type == "video"]
| order(release desc)
${projectionVideoListItem}
[0...10]
        `),
            ...categories.map(([tagName, limit]) =>
                sanityClient.fetch<VideoItem>(`
*["${tagName}" in tags[]->name]
| order(release desc)
${projectionVideoListItem}
[0...${limit}]
`)
            ),
        ]);

        const body: Record<string, VideoItem> = { all };
        categories.forEach(([category], index) => {
            body[category] = listCategories[index];
        });

        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = body;
    });
}

export default addRoutesHome;

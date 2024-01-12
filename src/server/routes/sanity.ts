import type Router from 'koa-router';
// import type { AxiosResponse } from 'axios';

import axios from 'axios';
// import NodeCache from 'node-cache';

// const SanityCache = new NodeCache({
//     useClones: false,
//     checkperiod: 60 * 30, // 30 minutes
// });

const addRouteSanity = (router: Router): void => {
    router.post('/query/:qs', async (ctx) => {
        // const cachedValue = SanityCache.get(ctx.params.qs);

        // if (cachedValue) {
        //     // console.log(1111, 'cache hit');
        //     return new Promise((resolve) =>
        //         resolve(cachedValue as Promise<AxiosResponse>)
        //     );
        // }

        const PROJECT_ID = process.env.SANITY_PROJECT_ID;
        const DATASET = process.env.SANITY_DATASET;
        const QUERY = encodeURIComponent(ctx.params.qs);
        // Compose the URL for your project's endpoint and add the query
        const URL = `https://${PROJECT_ID}.apicdn.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

        // console.log(URL);

        // return axios.get(URL).then((res) => {
        //     // console.log(1111, SanityCache, ctx.params.qs);
        //     SanityCache.set(ctx.params.qs, res);
        //     return res;
        // });
        // return axios.get(URL);
        ctx.body = (await axios.get(URL)).data;
    });
};

export default addRouteSanity;

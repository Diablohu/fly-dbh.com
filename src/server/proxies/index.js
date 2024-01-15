import proxy from 'koa-proxies';

import { routeNameSanityImageCdn } from '~AppConfig';

const proxies = [
    proxy(`/${routeNameSanityImageCdn}`, {
        target: `https://cdn.sanity.io/images/${process.env.SANITY_PROJECT_ID}/${process.env.SANITY_DATASET}`,
        changeOrigin: true,
        rewrite: (path) =>
            path.replace(new RegExp(`^/${routeNameSanityImageCdn}/`), '/'),
        logs: false,
    }),
];

export default proxies;

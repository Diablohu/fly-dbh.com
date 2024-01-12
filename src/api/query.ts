import axios, { AxiosResponse } from 'axios';
import NodeCache from 'node-cache';

const SanityCache = new NodeCache({
    useClones: false,
    checkperiod: 60 * 30, // 30 minutes
});

// eslint-disable-next-line import/no-anonymous-default-export
export default <T>(
    queryString: string,
    settings?: {
        // useCDN?: boolean;
    },
): Promise<AxiosResponse<T>> => {
    // console.log('-_-_-_-_-_-_ query.ts _-_-_-_-_-_-_');
    const cachedValue = SanityCache.get(queryString);
    // const { useCDN = true } = settings ?? {};

    if (cachedValue) {
        // console.log(1111, 'cache hit');
        return new Promise((resolve) =>
            resolve(cachedValue as Promise<AxiosResponse<T>>),
        );
    }

    const QUERY = queryString.replace(/\n[ ]*/gm, '');
    // Compose the URL for your project's endpoint and add the query
    // const URL = `https://${PROJECT_ID}.${
    //     useCDN ? 'apicdn' : 'api'
    // }.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    const URL =
        (__CLIENT__ ? '' : `http://localhost:${process.env.SERVER_PORT}`) +
        `/query`;

    return axios
        .post(URL, {
            query: QUERY,
        })
        .then((res) => {
            // console.log(1111, SanityCache, queryString);
            // console.log(res);
            SanityCache.set(queryString, res);
            return res;
        });
};

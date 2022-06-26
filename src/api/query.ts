import axios, { AxiosResponse } from 'axios';
import NodeCache from 'node-cache';

const SanityCache = new NodeCache({ useClones: false });

export default <T>(queryString: string): Promise<AxiosResponse<T>> => {
    const cachedValue = SanityCache.get(queryString);

    if (cachedValue) {
        // console.log(1111, 'cache hit');
        return new Promise((resolve) =>
            resolve(cachedValue as Promise<AxiosResponse<T>>)
        );
    }

    const PROJECT_ID = 'w0egla5g';
    const DATASET = 'production';
    const QUERY = encodeURIComponent(queryString);
    // Compose the URL for your project's endpoint and add the query
    const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    return axios.get(URL).then((res) => {
        // console.log(1111, SanityCache, queryString);
        SanityCache.set(queryString, res);
        return res;
    });
};

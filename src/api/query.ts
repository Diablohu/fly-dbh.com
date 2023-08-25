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
        useCDN?: boolean;
    }
): Promise<AxiosResponse<T>> => {
    const cachedValue = SanityCache.get(queryString);
    const { useCDN = true } = settings ?? {};

    if (cachedValue) {
        // console.log(1111, 'cache hit');
        return new Promise((resolve) =>
            resolve(cachedValue as Promise<AxiosResponse<T>>)
        );
    }

    // TODO: SANITY_PROJECT_ID
    const PROJECT_ID = 'w0egla5g';
    // TODO: SANITY_DATASET
    const DATASET = 'production';
    const QUERY = encodeURIComponent(queryString);
    // Compose the URL for your project's endpoint and add the query
    const URL = `https://${PROJECT_ID}.${
        useCDN ? 'apicdn' : 'api'
    }.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    return axios.get(URL).then((res) => {
        // console.log(1111, SanityCache, queryString);
        SanityCache.set(queryString, res);
        return res;
    });
};

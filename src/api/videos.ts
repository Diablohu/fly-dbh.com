/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import { getLocaleId } from 'koot';

import { RootState, VideoItem } from '@types';
import { UPDATE_VIDEO_LIST } from '@constants/action-types';
import { routeNameSanityImageCdn } from '~AppConfig';

import query from './query';

export const getVideoList = async ({
    from = 0,
    length = 20,
}: {
    from?: number;
    length?: number;
} = {}) =>
    (
        await query<{
            result: VideoItem[];
        }>(`
*[_type == "video"] | order(release desc){
    _id,
    title,
    'tags': tags[]->{
        "value": name,
        "label": title
    },
    release,
    "cover": cover.asset->path + '?auto=format&w=400&q=50',
    links
}[${from}...${from + length}]
            `)
    )?.data?.result?.map(({ release, cover, ...p }) => ({
        release: new Date(release).valueOf(),
        cover: `/${routeNameSanityImageCdn}${cover.replace(
            `images/${process.env.SANITY_PROJECT_ID}/${process.env.SANITY_DATASET}`,
            '',
        )}`,
        ...p,
    }));

export const getVideoListAction =
    ({
        from = 0,
        length = 20,
    }: {
        from?: number;
        length?: number;
    } = {}): ThunkAction<void, RootState, unknown, Action<string>> =>
    async (dispatch) => {
        // if (__SERVER__) {
        return dispatch({
            type: UPDATE_VIDEO_LIST,
            payload: await getVideoList({
                from,
                length,
            }),
        });
        // }
        // return;
    };

// tags[]->

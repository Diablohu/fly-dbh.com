/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import { getLocaleId } from 'koot';

import { RootState, VideoItem } from '@types';
import { UPDATE_VIDEO_LIST } from '@constants/action-types';

import query from './query';

export const getVideoList =
    (): ThunkAction<void, RootState, unknown, Action<string>> =>
    async (dispatch) => {
        if (__SERVER__) {
            return dispatch({
                type: UPDATE_VIDEO_LIST,
                payload: (
                    await query<{
                        result: VideoItem[];
                    }>(`*[_type == "video"] | order(release desc){
                        _id,
                        title,
                        'tags': tags[]->{
                            "value": name,
                            "label": title
                        },
                        release,
                        "cover": cover.asset->url + '?auto=format&w=600&q=50',
                        links
                    }`)
                )?.data?.result?.map(({ release, ...p }) => ({
                    release: new Date(release).valueOf(),
                    ...p,
                })),
            });
        }
        return;
    };

// tags[]->

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getLocaleId } from 'koot';

import { RootState, VideoItem } from '@types';
import { UPDATE_VIDEO_LIST } from '@constants/action-types';

export const getVideoList = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => async (dispatch) => {
    if (__SERVER__) {
        const list: VideoItem[] = require('@data/videos').default;
        return dispatch({
            type: UPDATE_VIDEO_LIST,
            payload: list.map(({ name, des, ...o }) => ({
                name: name[getLocaleId()] ?? name.zh,
                des: des[getLocaleId()] ?? name.zh,
                ...o,
            })),
        });
    }
    return;
};

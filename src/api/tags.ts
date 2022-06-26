/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import { getLocaleId } from 'koot';
// import axios from 'axios';

import {
    RootState,
    // VideoItem
} from '@types';
import { UPDATE_TAG_LIST } from '@constants/action-types';

import query from './query';

interface Tag {
    name: string;
    type: string;
    title: string;
    sort: number;
}

export const getTagList =
    (): ThunkAction<void, RootState, unknown, Action<string>> =>
    async (dispatch) => {
        if (__SERVER__) {
            return dispatch({
                type: UPDATE_TAG_LIST,
                payload: (
                    await query<{
                        result: Tag[];
                    }>(`*[_type == "tag"] | order(sort){
                        name,
                        title,
                        "type": tag_type
                    }`)
                )?.data?.result,
            });
        }
        return;
    };

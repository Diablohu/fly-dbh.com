/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '@types';
import { SET_APP_MODE } from '@constants/action-types';

export const setAppMode = (
    newMode: string
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) =>
    dispatch({
        type: SET_APP_MODE,
        payload: newMode,
    });

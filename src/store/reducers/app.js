import { SET_APP_MODE } from '@constants/action-types';
import { NORMAL } from '@constants/app-mode';

const initialState = {
    mode: NORMAL,
};

export default function (state = initialState, { type, payload } = {}) {
    switch (type) {
        case SET_APP_MODE: {
            return {
                ...state,
                mode: payload,
            };
        }

        default:
            return state;
    }
}

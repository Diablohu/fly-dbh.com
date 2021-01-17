import { UPDATE_VIDEO_LIST } from '@constants/action-types';

const initialState = [];

export default function (state = initialState, { type, payload } = {}) {
    switch (type) {
        case UPDATE_VIDEO_LIST: {
            return payload ?? state;
        }

        default:
            return state;
    }
}

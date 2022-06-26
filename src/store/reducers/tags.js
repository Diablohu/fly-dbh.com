import { UPDATE_TAG_LIST } from '@constants/action-types';

const initialState = [];

export default function (state = initialState, { type, payload } = {}) {
    switch (type) {
        case UPDATE_TAG_LIST: {
            return payload ?? state;
        }

        default:
            return state;
    }
}

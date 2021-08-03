/* eslint-disable @typescript-eslint/no-explicit-any */

import { LocationShape } from 'react-router/lib/PropTypes';

// 综合 =======================================================================

// React 相关 ==================================================================
export interface UIState {
    [metaKey: string]: any;
}

export interface RootState {
    localeId: string;
    routing: {
        locationBeforeTransitions: LocationShape;
    };
}

export interface RouteLocation {
    pathname: string;
    search: string;
    state: any;
    action: 'POP' | 'PUSH';
    key: any;
}
export interface RouteComponentProps {
    // location: LocationShape;
    location: RouteLocation;
    params: {
        [key: string]: any;
    };
}

// ============================================================================
export type VideoTag =
    | 'clip'
    | 'training'
    | 'landing'
    | 'airport'
    | 'route'
    | 'device'
    | 'mod'
    | 'tour'
    | 'news'
    | 'flight';
export type VideoSource = 'bilibili' | 'youtube';
export interface VideoItem {
    name: {
        [localeId: string]: string;
    };
    des: {
        [localeId: string]: string;
    };
    thumbnail?: string;
    thumbnailOriginal?: string;
    link: {
        [type in VideoSource]: string;
    };
    tag: Array<VideoTag>;
    release: number;
}

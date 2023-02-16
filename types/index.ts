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

// API Params =================================================================

export type ParamsGetVideos = {
    tag?: VideoTag;
    length?: number;
    start?: number;
};

// ============================================================================
export type VideoTag =
    | 'news'
    | 'training'
    | 'flight'
    | 'test'
    | 'benchmark'
    | 'world'
    | 'chat'
    | 'danger'
    | 'patch'
    | 'tip'
    | 'clip'
    | 'landing'
    | 'tour'
    | 'mod'
    | 'device'
    | 'vr'
    | 'dev-qa'
    | 'atc';
export type VideoSource = 'bilibili' | 'youtube';
export interface VideoItem {
    title: string;
    tags: Array<{
        value: string;
        label: string;
    }>;
    description: string;
    cover: string;
    links: {
        [type in VideoSource]: string;
    };
    release: string;
}

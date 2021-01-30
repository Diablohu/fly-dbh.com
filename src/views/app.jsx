import React, { memo, useState } from 'react';
import { extend } from 'koot';
import qs from 'query-string';
import classNames from 'classnames';

import VideoList from '@components/video-list';
import Icon from '@components/icon';
import Center from '@components/center';

import { setAppMode } from '@api/app';
import { PWA, NORMAL } from '@constants/app-mode';
import videoSources from '@constants/video-sources';

import styles, { wrapper as classNameModule } from './app.module.less';

// ============================================================================

const App = extend({
    connect: true,
    pageinfo: {
        title: '飞行员大波胡 | Sim-Pilot Diablohu',
        description: '【飞行员大波胡 | Sim-Pilot Diablohu】系列视频',
    },
    data: (state, renderProps, dispatch) => {
        if (__CLIENT__) return;
        switch (
            qs.parse(state.routing.locationBeforeTransitions.search).utm_source
        ) {
            case 'web_app_manifest':
                return dispatch(setAppMode(PWA));
            default:
                dispatch(setAppMode(NORMAL));
        }
    },
    styles,
})(({ className, dispatch }) => {
    return (
        <React.StrictMode>
            <div className={className}>
                <Banner />
                <List />
                <Footer />
            </div>
        </React.StrictMode>
    );
});
export default App;

// ============================================================================

const Banner = extend({
    connect: (state) => ({
        appMode: state.app.mode,
    }),
})(
    memo(({ appMode }) => {
        return (
            <div
                className={classNames([
                    `${classNameModule}-banner`,
                    {
                        'mod-pwa': appMode === PWA,
                    },
                ])}
            >
                <div className="wrapper">
                    <h1 className="logo">飞行员大波胡 | Sim-Pilot Diablohu</h1>
                    <div className="subscribe">
                        <a
                            href="https://space.bilibili.com/79089"
                            target="_blank"
                            rel="noreferrer"
                            className="bilibili"
                        >
                            <Icon className="icon" icon="bilibili" />
                            关注
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCJyg_CwPNweYfuwZ05VGpJg"
                            target="_blank"
                            rel="noreferrer"
                            className="youtube"
                        >
                            <Icon className="icon" icon="youtube" />
                            订阅
                        </a>
                    </div>
                </div>
            </div>
        );
    })
);

const List = memo(() => {
    const [source, setSource] = useState(undefined);

    function selectSource(evt) {
        evt.preventDefault();
        const targetSource = evt.currentTarget.getAttribute('data-source');
        setSource(targetSource === source ? undefined : targetSource);
    }

    return (
        <div className={`${classNameModule}-list`}>
            <Center className="wrapper">
                <div className="header">
                    <h2 className="title">最新视频</h2>
                    <div className="sources">
                        首选视频源
                        {videoSources.map((thisSource) => (
                            <button
                                key={thisSource}
                                data-source={thisSource}
                                onClick={selectSource}
                                className={classNames([
                                    'btn-source',
                                    {
                                        'is-on': thisSource === source,
                                    },
                                ])}
                            >
                                <Icon className="icon" icon={thisSource} />
                            </button>
                        ))}
                    </div>
                </div>
                <VideoList className="list" source={source} />
            </Center>
        </div>
    );
});

const Footer = memo(() => {
    return (
        <Center className={`${classNameModule}-footer`}>
            &#169; 2021{' '}
            <a href="https://diablohu.com/" target="_blank" rel="noreferrer">
                diablohu.com
            </a>{' '}
            |{' '}
            <a
                href="https://weibo.com/u/2019430291"
                target="_blank"
                rel="noreferrer"
            >
                @diablohu (微博)
            </a>{' '}
            |{' '}
            <a
                href="https://twitter.com/Diablohu/"
                target="_blank"
                rel="noreferrer"
            >
                @diablohu (twitter)
            </a>
        </Center>
    );
});

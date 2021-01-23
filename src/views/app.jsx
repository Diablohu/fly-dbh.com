import React, { useEffect } from 'react';
import { extend } from 'koot';
import qs from 'query-string';
import classNames from 'classnames';

import VideoList from '@components/video-list';
import Icon from '@components/icon';
import Center from '@components/center';

import { setAppMode } from '@api/app';
import { PWA, NORMAL } from '@constants/app-mode';

import styles from './app.module.less';

// ============================================================================

const App = extend({
    connect: (state) => ({
        appMode: state.app.mode,
    }),
    pageinfo: {
        title: '飞行员大波胡 | Sim-Pilot Diablohu',
        description: '【飞行员大波胡 | Sim-Pilot Diablohu】系列视频',
    },
    styles,
})(({ className, dispatch, appMode }) => {
    useEffect(() => {
        switch (qs.parse(window.location.search).utm_source) {
            case 'web_app_manifest':
                return dispatch(setAppMode(PWA));
            default:
                dispatch(setAppMode(NORMAL));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.StrictMode>
            <div className={className}>
                <div
                    className={classNames([
                        'banner',
                        {
                            'mod-pwa': appMode === PWA,
                        },
                    ])}
                >
                    <div className="wrapper">
                        <h1 className="logo">
                            飞行员大波胡 | Sim-Pilot Diablohu
                        </h1>
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
                <div className="list">
                    <Center>
                        <VideoList />
                    </Center>
                </div>
                <Center className="infos">
                    &#169; 2021{' '}
                    <a
                        href="https://diablohu.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
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
            </div>
        </React.StrictMode>
    );
});
export default App;

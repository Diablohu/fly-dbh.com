import React from 'react';
import { extend } from 'koot';

import VideoList from '@components/video-list';
import Icon from '@components/icon';
import Center from '@components/center';

import styles from './app.module.less';

// ============================================================================

const App = extend({
    pageinfo: {
        title: '飞行员大波胡 | Sim-Pilot Diablohu',
        description: '【飞行员大波胡 | Sim-Pilot Diablohu】系列视频',
    },
    styles,
})(({ className }) => (
    <React.StrictMode>
        <div className={className}>
            <div className="banner">
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
));
export default App;

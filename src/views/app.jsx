import { StrictMode, memo, useState, useEffect, useRef } from 'react';
import { extend } from 'koot';
import qs from 'query-string';
import classNames from 'classnames';
import Cookies from 'js-cookie';

import VideoList from '@components/video-list';
import Icon from '@components/icon';
import Center from '@components/center';
import Tag from '@components/tag';

import { setAppMode } from '@api/app';
import { PWA, NORMAL } from '@constants/app-mode';
import videoSources from '@constants/video-sources';
import videoTags, { names as videoTagName } from '@constants/video-tags';
import { VIDEO_SOURCE as cookieNameVideoSource } from '@constants/cookie-name';

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
        <StrictMode>
            <div className={className}>
                <Banner />
                <List />
                <Footer />
            </div>
        </StrictMode>
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
                <video
                    className="video"
                    // poster={require('@assets/banner/cover.jpg').default}
                    crossOrigin="anonymous"
                    preload="auto"
                    autoPlay
                    loop
                >
                    <source
                        type="video/webm"
                        src={require('@assets/banner/30fps/best.webm').default}
                    />
                    <source
                        type="video/mp4"
                        src={require('@assets/banner/30fps/medium.mp4').default}
                    />
                </video>
            </div>
        );
    })
);

const List = extend({
    connect: (state) => ({
        defaultSource: state.server?.cookie?.[cookieNameVideoSource],
    }),
})(
    memo(({ defaultSource }) => {
        const HeaderRef = useRef(null);

        const [source, setSource] = useState(defaultSource);
        const [tag, setTag] = useState('');

        useEffect(() => {
            if (!HeaderRef || !HeaderRef.current) return;
            if (List.observer) return;
            List.observer = new IntersectionObserver(
                ([e]) => {
                    // console.log(e.boundingClientRect, e.intersectionRect);
                    e.target.classList.toggle(
                        'is-sticky',
                        e.boundingClientRect.top <= 0 &&
                            e.intersectionRatio < 1 &&
                            e.intersectionRatio > 0
                    );
                },
                { threshold: [1, 0] }
            );
            List.observer.observe(HeaderRef.current);
        }, []);

        function selectSource(evt) {
            evt.preventDefault();
            const targetSource = evt.currentTarget.getAttribute('data-source');
            const newSource =
                targetSource === source ? undefined : targetSource;
            setSource(newSource);
            if (newSource)
                Cookies.set(cookieNameVideoSource, newSource, { expires: 365 });
            else Cookies.remove(cookieNameVideoSource);
        }
        function selectTag(evt) {
            evt.preventDefault();
            const targetTag = evt.currentTarget.getAttribute('data-tag');
            setTag(targetTag === tag ? undefined : targetTag);
        }

        return (
            <div className={`${classNameModule}-list`}>
                <div className="header" ref={HeaderRef}>
                    <Center className="wrapper">
                        <h2 className="title">最新视频</h2>
                        <div className="sources">
                            视频源
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
                        <div className="tags">
                            {List.tags.map(({ label, value }) => (
                                <Tag
                                    key={value}
                                    onClick={selectTag}
                                    className={classNames([
                                        'tag',
                                        {
                                            'is-on': value === tag,
                                        },
                                    ])}
                                    tag={value}
                                    label={label}
                                />
                            ))}
                        </div>
                    </Center>
                </div>
                <Center className="list-wrapper">
                    <VideoList className="list" source={source} tag={tag} />
                </Center>
            </div>
        );
    })
);
List.tags = [{ label: '全部', value: '' }].concat(
    videoTags.map((tag) => ({
        label: videoTagName[tag],
        value: tag,
    }))
);

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

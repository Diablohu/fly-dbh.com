import {
    StrictMode,
    memo,
    useState,
    useEffect,
    useRef,
    useCallback,
    useContext,
    useMemo,
    createContext,
} from 'react';
import { Link } from 'react-router';
import { extend } from 'koot';
import qs from 'query-string';
import classNames from 'classnames';
import Cookies from 'js-cookie';

import VideoList from '@components/video-list';
import Icon from '@components/icon';
import Center from '@components/center';
import Tag from '@components/tag';

import { setAppMode } from '@api/app';
import { getTagList } from '@api/tags';
import { PWA, NORMAL } from '@constants/app-mode';
import videoSources from '@constants/video-sources';
// import {
//     names as videoTagName,
//     listWithSeperator as videoTags,
// } from '@constants/video-tags';
import { VIDEO_SOURCE as cookieNameVideoSource } from '@constants/cookie-name';

import styles, { wrapper as classNameModule } from './app.module.less';

// ============================================================================

const listStickyContext = createContext({
    value: false,
    update() {},
});

// ============================================================================

const App = extend({
    connect: true,
    pageinfo: {
        title: '飞行员大波胡 | Sim-Pilot Diablohu',
        description: '【飞行员大波胡 | Sim-Pilot Diablohu】系列视频',
    },
    data: (state, renderProps, dispatch) => {
        if (__CLIENT__) return;
        return Promise.all([
            (() => {
                switch (
                    qs.parse(state.routing.locationBeforeTransitions.search)
                        .utm_source
                ) {
                    case 'web_app_manifest':
                        return dispatch(setAppMode(PWA));
                    default:
                        return dispatch(setAppMode(NORMAL));
                }
            })(),
            dispatch(getTagList()),
        ]);
    },
    styles,
})(({ className, dispatch, params, router, children }) => {
    const [listStickyValue, setListStickyValue] = useState(false);
    const { category } = params;
    return (
        <StrictMode>
            <listStickyContext.Provider
                value={{
                    value: listStickyValue,
                    update: setListStickyValue,
                }}
            >
                {children ?? (
                    <div className={className}>
                        <Banner />
                        <List category={category} router={router} />
                        <Footer />
                    </div>
                )}
            </listStickyContext.Provider>
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
        const WrapperRef = useRef(null);
        const VideoRef = useRef(null);

        const { value: listSticky } = useContext(listStickyContext);

        const setStylesDo = useCallback(
            (evt) => {
                // reset the tick so we can
                // capture the next onScroll
                Banner.ticking = false;

                if (listSticky) return;

                const wrapperHeight = WrapperRef.current.offsetHeight;
                WrapperRef.current.style.setProperty(
                    '--scale',
                    Math.min(
                        1,
                        Math.max(
                            0,
                            (wrapperHeight - window.scrollY) / wrapperHeight // * 1.2
                        )
                    )
                );
                VideoRef.current.style.setProperty(
                    '--offsetY',
                    window.scrollY / 2
                );
                // console.log(
                //     window.scrollY,
                //     pos,
                //     WrapperRef.current,
                //     VideoRef.current
                // );
            },
            [WrapperRef, VideoRef, listSticky]
        );
        const setStyles = useCallback(
            (evt) => {
                if (!Banner.ticking) {
                    requestAnimationFrame(setStylesDo);
                }
                Banner.ticking = true;
            },
            [setStylesDo]
        );

        useEffect(() => {
            setStyles();
            window.addEventListener('resize', setStyles);
            window.addEventListener('scroll', setStyles);
            // VideoRef.current.play();
            return () => {
                window.removeEventListener('resize', setStyles);
                window.removeEventListener('scroll', setStyles);
            };
        }, [setStyles]);

        useEffect(() => {
            if (listSticky) VideoRef.current.pause();
            else
                try {
                    VideoRef.current.play();
                } catch (e) {}
            // console.log({ listSticky });
        }, [listSticky]);

        return (
            <div
                className={classNames([
                    `${classNameModule}-banner`,
                    {
                        'mod-pwa': appMode === PWA,
                    },
                ])}
            >
                <div className="wrapper" ref={WrapperRef}>
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
                        <a
                            href="https://qun.fly-dbh.com"
                            target="_blank"
                            rel="noreferrer"
                            className="qun"
                        >
                            粉丝群
                        </a>
                    </div>
                </div>
                <video
                    className="video"
                    // poster={require('@assets/banner/cover.jpg').default}
                    crossOrigin="anonymous"
                    preload="auto"
                    playsInline
                    autoPlay
                    loop
                    muted
                    ref={VideoRef}
                >
                    <source
                        type="video/webm"
                        src={require('@assets/banner/30fps/medium.webm')}
                    />
                    <source
                        type="video/mp4"
                        src={require('@assets/banner/30fps/low.mp4')}
                    />
                </video>
            </div>
        );
    })
);
Banner.requestTick = () => {
    if (!Banner.ticking) {
        requestAnimationFrame(Banner.update);
    }
    Banner.ticking = true;
};

// ============================================================================

const List = extend({
    connect: (state) => ({
        defaultSource: state.server?.cookie?.[cookieNameVideoSource],
        rawTags: state.tags,
    }),
})(
    memo(({ defaultSource, category = '', router, rawTags }) => {
        const ContainerRef = useRef(null);
        const HeaderObserverSpotRef = useRef(null);

        const [source, setSource] = useState(defaultSource);
        // const [tag, setTag] = useState(category);
        // const [sticky, setSticky] = useState(false);
        const { value: sticky, update: setSticky } =
            useContext(listStickyContext);

        const tags = useMemo(() => {
            const list = [
                { label: '全部', value: '' },
                // ''
            ];
            rawTags.forEach(({ name, title, type }, index) => {
                if (index > 0 && type !== rawTags[index - 1].type) {
                    list.push('');
                }
                list.push({
                    label: title,
                    value: name,
                });
            });
            return list;
        }, [rawTags]);
        const currentCategory = useMemo(() => {
            if (!category) return '最新视频';
            return (
                tags?.filter(({ value }) => value === category)[0]?.label ??
                '最新视频'
            );
        }, [tags, category]);

        function scrollToList() {
            if (!ContainerRef || !ContainerRef.current) return;
            const { top } = ContainerRef.current.getBoundingClientRect();
            window.scrollTo(
                0,
                4 + top + window.pageYOffset ||
                    document.documentElement.scrollTop
            );
        }

        useEffect(() => {
            if (!HeaderObserverSpotRef || !HeaderObserverSpotRef.current)
                return;
            if (List.observer) return;
            List.observer = new IntersectionObserver(
                ([e]) => {
                    // console.log(123, e.boundingClientRect, e.intersectionRect);
                    // e.target.classList.toggle(
                    //     'is-sticky',
                    //     e.boundingClientRect.top <= 0 &&
                    //         e.intersectionRatio < 1 &&
                    //         e.intersectionRatio > 0
                    // );
                    // console.log(
                    //     123,
                    //     e.boundingClientRect.top,
                    //     e.intersectionRatio
                    // );
                    setSticky(e.intersectionRatio <= 0);
                },
                { threshold: [1, 0] }
            );
            List.observer.observe(HeaderObserverSpotRef.current);
        }, [setSticky]);

        useEffect(() => {
            if (!category) return;
            scrollToList();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const selectSource = useCallback(
            function (evt) {
                evt.preventDefault();
                const targetSource =
                    evt.currentTarget.getAttribute('data-source');
                const newSource =
                    targetSource === source ? undefined : targetSource;
                setSource(newSource);
                if (newSource)
                    Cookies.set(cookieNameVideoSource, newSource, {
                        expires: 365,
                    });
                else Cookies.remove(cookieNameVideoSource);
            },
            [source]
        );
        const selectTag = useCallback(function (evt) {
            setTimeout(() => {
                scrollToList();
            }, 10);
            // const targetTag = evt.currentTarget.getAttribute('data-tag');
            // setTag(targetTag === tag ? undefined : targetTag);
        }, []);

        const onSelect = useCallback(
            function (e) {
                router?.push(`/${e.target.value}`);
                setTimeout(() => {
                    scrollToList();
                }, 10);
            },
            [router]
        );

        return (
            <div className={`${classNameModule}-list`} ref={ContainerRef}>
                <div
                    className={classNames([
                        'header',
                        {
                            'is-sticky': sticky,
                        },
                    ])}
                >
                    <span
                        className="observe-spot"
                        ref={HeaderObserverSpotRef}
                    ></span>
                    <Center className="wrapper">
                        <h2 className="title">
                            最新视频
                            <span className="sm">
                                <Icon icon="menu" className="icon" />
                                {currentCategory}
                                <select onChange={onSelect} value={category}>
                                    {tags.map((tag, index) => {
                                        if (tag === '')
                                            return (
                                                <option
                                                    key={index}
                                                    value=""
                                                    disabled
                                                >
                                                    --
                                                </option>
                                            );
                                        const { label, value } = tag;
                                        return (
                                            <option key={value} value={value}>
                                                {label}
                                            </option>
                                        );
                                    })}
                                </select>
                            </span>
                        </h2>
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
                            {tags.map((tag, index) => {
                                if (tag === '')
                                    return (
                                        <span
                                            className="seperator"
                                            key={index}
                                        ></span>
                                    );
                                const { label, value } = tag;
                                return (
                                    <Link key={value} to={`/${value}`}>
                                        <Tag
                                            onClick={selectTag}
                                            className={classNames([
                                                'tag',
                                                {
                                                    'is-on': value === category,
                                                },
                                            ])}
                                            tag={value}
                                            label={label}
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    </Center>
                </div>
                <Center className="list-wrapper">
                    <VideoList
                        className="list"
                        source={source}
                        tag={category}
                    />
                </Center>
            </div>
        );
    })
);
// List.tags = [
//     { label: '全部', value: '' },
//     // ''
// ].concat(
//     videoTags.map((tag) =>
//         tag === ''
//             ? ''
//             : {
//                   label: videoTagName[tag],
//                   value: tag,
//               }
//     )
// );

// ============================================================================

const Footer = memo(() => {
    return (
        <Center className={`${classNameModule}-footer`}>
            &#169; 2023{' '}
            <a href="https://diablohu.com/" target="_blank" rel="noreferrer">
                diablohu.com
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

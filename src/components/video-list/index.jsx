import { memo, useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { extend } from 'koot';

import { getVideoList, getVideoListAction } from '@api/videos';
import Icon from '@components/icon';
import Tag from '@components/tag';

import sources, { names as sourceNames } from '@constants/video-sources';

import styles, { wrapper as classNameModule } from './index.module.less';

// Component Class ============================================================

const VideoList = extend({
    connect: (state) => ({
        initialList:
            state.videos.filter(({ release }) => Date.now() > release) ?? [],
    }),
    data: {
        fetch: (state, renderProps, dispatch) => {
            return dispatch(getVideoListAction());
        },
        check: (state, renderProps) => {
            // 当满足以下条件时，表示数据已就绪，`fetch` 方法不运行
            return (
                Array.isArray(renderProps.initialList) &&
                renderProps.initialList.length > 0
            );
        },
    },
    styles,
})(({ className, initialList, tag, source }) => {
    const EndBarRef = useRef(null);

    const [list, setList] = useState(initialList);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isListEnd, setIsListEnd] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(initialList.length);

    const lastItemRelease = useMemo(() => {
        if (list.length === 0) return 0;
        const lastItem = list[list.length - 1];
        if (typeof lastItem.release === 'number') return lastItem.release;
        return Date(list[list.length - 1].release).valueOf();
    }, [list]);

    const loadMore = useCallback(async () => {
        if (loading) return;
        setLoading(true);

        // console.log(123, 'getVideoList', { from: currentIndex });

        const newItems = await getVideoList({ from: currentIndex }).catch(
            (err) => {
                setError(err);
                setLoading(false);
                return [];
            },
        );

        const availableItems = newItems.filter(({ release }) => {
            return lastItemRelease > release;
        });

        // console.log(123, { newItems, availableItems });

        if (availableItems.length === 0) {
            setIsListEnd(true);
            return;
        }

        const newList = [...list, ...availableItems];
        setList(newList);
        setCurrentIndex(list.length + newItems.length);

        // loadMore();
        // console.log(123, '~~~', newList);
        // console.log('\n\n');

        setLoading(false);
    }, [loading, currentIndex, list, lastItemRelease]);

    useEffect(() => {
        if (!EndBarRef || !EndBarRef.current) return;

        if (isListEnd) {
            VideoList.endBarObserver?.unobserve(EndBarRef.current);
            return;
        }

        if (VideoList.endBarObserver) {
            VideoList.endBarObserver?.unobserve(EndBarRef.current);
        }

        if (loading) return;

        VideoList.endBarObserver = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting && !loading) {
                    loadMore();
                }
                // console.log(
                //     123,
                //     e.boundingClientRect,
                //     e.intersectionRect,
                //     e.intersectionRatio,
                //     e.isIntersecting,
                // );
                // console.log(
                //     123,
                //     e.boundingClientRect.top,
                //     e.intersectionRatio
                // );
            },
            { threshold: [1, 0] },
        );

        VideoList.endBarObserver.observe(EndBarRef.current);
    }, [isListEnd, loadMore, loading]);

    return (
        <div className={className}>
            <div className={`${classNameModule}-list`}>
                {list
                    .filter(
                        ({ tags }) =>
                            !tag || tags.some(({ value }) => value === tag),
                    )
                    .map((item) => (
                        <Item video={item} key={item.release} source={source} />
                    ))}
                <div
                    className={`${classNameModule}-list-end-item`}
                    ref={EndBarRef}
                ></div>
            </div>
            <div className={`${classNameModule}-list-after`}>
                {error ? error : isListEnd ? '没有更多啦' : 'LOADING...'}
            </div>
        </div>
    );
});

export default VideoList;

// ============================================================================

const Item = memo(
    ({ video: { title, cover, links, release, tags }, source }) => {
        const time = new Date(release);

        const C = source ? 'a' : 'div';
        const P = {
            className: `${classNameModule}-item`,
        };

        if (C === 'a') {
            P.className += ' mod-has-source';
            P.href = links[source];
            P.target = '_blank';
            P.rel = 'noreferrer';
        }

        return (
            <C {...P}>
                <span className="thumbnail">
                    <img src={cover} alt={title} loading="lazy" />
                </span>
                {!source && (
                    <span className="links">
                        {sources.map((source) => (
                            <a
                                href={links[source]}
                                target="_blank"
                                rel="noreferrer"
                                className={source}
                                key={source}
                            >
                                <Icon className="icon" icon={source} />
                                {sourceNames[source]}
                            </a>
                        ))}
                    </span>
                )}
                <span className="infos">
                    {Array.isArray(tags) && tags.length && (
                        <span className="tags">
                            {tags.map(({ label, value }) => (
                                <Tag
                                    className="tag is-on"
                                    tag={value}
                                    label={label}
                                    key={value}
                                />
                            ))}
                        </span>
                    )}
                    <span className="date">
                        {time.getFullYear()} / {time.getMonth() + 1} /{' '}
                        {time.getDate()}
                    </span>
                    <strong className="name">{title}</strong>
                </span>
            </C>
        );
    },
);

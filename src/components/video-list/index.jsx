import { PureComponent, memo } from 'react';
import { extend } from 'koot';

import { getVideoList } from '@api/videos';
import Icon from '@components/icon';
import Tag from '@components/tag';

import sources, { names as sourceNames } from '@constants/video-sources';

import styles, { wrapper as classNameModule } from './index.module.less';

// Component Class ============================================================

@extend({
    connect: (state) => ({
        list: state.videos ?? [],
    }),

    data: (state, renderProps, dispatch) => dispatch(getVideoList()),

    styles,
})
class VideoList extends PureComponent {
    state: {
        sort: 'desc',
    };

    render() {
        const now = Date.now();
        return (
            <div className={this.props.className}>
                {this.props.list
                    .filter(({ release }) => now > release)
                    .filter(
                        ({ tag }) =>
                            !this.props.tag || tag.includes(this.props.tag)
                    )
                    .map((item) => (
                        <Item
                            video={item}
                            key={item.release}
                            source={this.props.source}
                        />
                    ))}
            </div>
        );
    }
}

export default VideoList;

// ============================================================================

const Item = memo(
    ({ video: { name, thumbnail, link, release, tag }, source }) => {
        const time = new Date(release);

        const C = source ? 'a' : 'div';
        const P = {
            className: `${classNameModule}-item`,
        };

        if (C === 'a') {
            P.className += ' mod-has-source';
            P.href = link[source];
            P.target = '_blank';
            P.rel = 'noreferrer';
        }

        return (
            <C {...P}>
                <span className="thumbnail">
                    <img src={thumbnail} alt={name} loading="lazy" />
                </span>
                {!source && (
                    <span className="links">
                        {sources.map((source) => (
                            <a
                                href={link[source]}
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
                    {Array.isArray(tag) && tag.length && (
                        <span className="tags">
                            {tag.map((t) => (
                                <Tag className="tag" tag={t} key={t} />
                            ))}
                        </span>
                    )}
                    <span className="date">
                        {time.getFullYear()} / {time.getMonth() + 1} /{' '}
                        {time.getDate()}
                    </span>
                    <strong className="name">{name}</strong>
                </span>
            </C>
        );
    }
);

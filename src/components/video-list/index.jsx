import React, { ReactNode, PureComponent, memo } from 'react';
import { extend } from 'koot';

import { getVideoList } from '@api/videos';
import Icon from '@components/icon';

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

    render(): ReactNode {
        const now = Date.now();
        return (
            <div className={this.props.className}>
                {this.props.list
                    .filter(({ release }) => now > release)
                    .map((item) => (
                        <Item video={item} key={item.release} />
                    ))}
            </div>
        );
    }
}

export default VideoList;

// ============================================================================

const Item = memo(({ video: { name, thumbnail, link, release, source } }) => {
    const time = new Date(release);
    return (
        <div className={`${classNameModule}-item`}>
            <span className="thumbnail">
                <img src={thumbnail} alt={name} loading="lazy" />
            </span>
            <span className="links">
                <a
                    href={link.bilibili}
                    target="_blank"
                    rel="noreferrer"
                    className="bilibili"
                >
                    <Icon className="icon" icon="bilibili" />
                    哔哩哔哩
                </a>
                <a
                    href={link.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="youtube"
                >
                    <Icon className="icon" icon="youtube" />
                    YouTube
                </a>
            </span>
            <span className="infos">
                <strong className="name">{name}</strong>
                <span className="date">
                    {time.getFullYear()} / {time.getMonth() + 1} /{' '}
                    {time.getDate()}
                </span>
            </span>
        </div>
    );
});

import { memo } from 'react';
import { extend } from 'koot';

import { VideoTag } from '@types';
import { names as tagName } from '@constants/video-tags';
import styles from './index.module.less';

// ============================================================================

interface ComponentProps {
    tag: string | VideoTag;
    label?: string;
}

// Functional Component =======================================================

const Tag = extend<ComponentProps>({
    styles,
})(
    memo(
        ({ className, tag, label, ...props }): JSX.Element => {
            return (
                <span className={className} data-tag={tag} {...props}>
                    {label ?? tagName[tag as VideoTag]}
                </span>
            );
        }
    )
);

export default Tag;

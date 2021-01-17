import React, { memo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles from './index.module.less';

// ============================================================================

interface ComponentProps {
    type?: 'wider' | 'reading';
}

// Functional Component =======================================================

const Center = extend<ComponentProps>({
    styles
})(
    memo(
        ({ className, type, ...props }): JSX.Element => (
            <div
                className={classNames([
                    className,
                    {
                        [`mod-${type}`]: typeof type === 'string'
                    }
                ])}
                {...props}
            />
        )
    )
);

export default Center;

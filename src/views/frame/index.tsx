import React from 'react';
import { extend } from 'koot';

import styles from './index.module.less';

// ============================================================================

interface ComponentProps {
    customProps?: string;
}

// Functional Component =======================================================

const Frame = extend<ComponentProps>({
    styles,
})(
    ({
        className,
        children,
        customProps,
        'data-class-name': classNameModule,
    }): JSX.Element => {
        return (
            <div
                className={className}
                data-custom-props={customProps}
                data-class-name={classNameModule}
            >
                {children}
            </div>
        );
    }
);

export default Frame;

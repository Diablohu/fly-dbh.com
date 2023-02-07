import { extend } from 'koot';

import styles from './index.module.less';

// Design =====================================================================

/*

┌───────────────────────────────────────────────┐
│                                               │
│                                               │
│                    LOGO                       │
│                    LINKS                      │
│                                               │
│                                               │
│      VIDEOS     TOOLS & RES       ABOUT       │
├───────────────────────────────────────────────┤
│              (VIDEOS HOME PAGE)               │
│  LATEST VIDEOS                                │
│  ───────────────────────────────────────────  │
│  MSFS NEWS                                    │
│  ───────────────────────────────────────────  │
│  TUTORIAL                CHAT                 │
│  ───────────────────────────────────────────  │
│  SHORTS                  WORLD                │
│  ───────────────────────────────────────────  │
│  ALL CATEGORIES                               │
├───────────────────────────────────────────────┤
│             COPYRIGHT & CONTACTS              │
└───────────────────────────────────────────────┘

- Videos Home Page 实为新路由 /videos
- 首页直接加载 Videos Home Page 数据，以适应上述路由设计
- 滚动到附近时 URL 更变但页面不变
- 导航条吸附，UI 变化

导航条

┌───────────────────────────────────────────────┐
│  VIDEOS   TOOLS & RES   ABOUT          X X X  │
└───────────────────────────────────────────────┘

*/

// ============================================================================

interface ComponentProps {
    customProps?: string;
}

// Functional Component =======================================================

const Home = extend<ComponentProps>({
    /*
    // 下例均为简易写法
    // 更详细的释义和高级写法，请查阅文档
    // https://koot.js.org/#/react

    connect: (state: any): any => {
        return {}
    },

    // 修改页面 title 和 meta 标签
    // pageinfo 也可为 function
    pageinfo: {
        title: '页面标题',
        metas: [
            { description: '页面描述' }
        ]
    },

    // 同构数据
    // https://koot.js.org/#/react
    data: (state: any, renderProps, dispatch) => {
        return dispatch({
            type: "ACTION",
            payload: {}
        });
    },

    // 控制组件的 SSR 行为
    // 仅作用于 SSR 项目
    ssr: true,
    */
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
                <p>Hello world!</p>
                {children}
            </div>
        );
    }
);

export default Home;

import { VideoItem } from '@types';

const videos: VideoItem[] = [
    {
        name: {
            zh: 'ASOBO新办公楼探秘',
        },
        des: {
            zh: '《微软模拟飞行》的全新系统更新第九弹现已开始公开测试，有一条改动引起了我的注意：在法国波尔多添加新的ASOBO办公室。大波胡第一时间登入公测服务器，叫了一架VOLOCITY空中出租车，前往波尔多一探究竟。',
        },
        thumbnailOriginal: './thumbnails/20220406.png',
        link: {
            youtube: 'https://youtu.be/s0TqVCjam0o',
            bilibili: 'https://www.bilibili.com/video/BV1jZ4y1U7LG',
        },
        tag: ['news', 'tour'],
        release: new Date('2022-04-06T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: 'SU9超级大黄蜂有音爆云了？落地怎么不能转向了？',
        },
        des: {
            zh: '《微软模拟飞行》的全新系统更新第九弹现已开始公开测试，在这新补丁中，开发组对 F/A-18 超级大黄蜂进行了大幅体验更新，增加“音爆云”等水汽凝结特效，对气动操控体验进行了优化。这些改动效果如何呢？那么在今天的节目中，大波胡就来对全新的超级大黄蜂进行试飞。',
        },
        thumbnailOriginal: './thumbnails/20220405.png',
        link: {
            youtube: 'https://youtu.be/K6tcj13yPWQ',
            bilibili: 'https://www.bilibili.com/video/BV18u411e7HH',
        },
        tag: ['news', 'test'],
        release: new Date('2022-04-05T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: SU9天鹰篇 · 这就是最真实的塞斯纳172？',
        },
        des: {
            zh: '《微软模拟飞行》的全新系统更新第九弹现已开始公开测试，开发组对史上产量最多的小型机塞斯纳172“天鹰”进行了脱胎换骨式的更新。在今天的节目中，大波胡就来通过游戏内的着陆挑战对全新的塞斯纳172进行试飞。',
        },
        thumbnailOriginal: './thumbnails/20220404.png',
        link: {
            youtube: 'https://youtu.be/PSiD7I5qwDY',
            bilibili: 'https://www.bilibili.com/video/BV12S4y1m7hg',
        },
        tag: ['test', 'landing'],
        release: new Date('2022-04-04T15:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '快讯: 官方中文版再度延期',
        },
        des: {
            zh: '哎，《微软模拟飞行》的官方汉化【又】跳票咧！但这就很怪了呀，项目负责人一个月前表示过中文版已经做完了啊！',
        },
        thumbnailOriginal: './thumbnails/20220330.png',
        link: {
            youtube: 'https://youtu.be/QYA_CprljjA',
            bilibili: 'https://www.bilibili.com/video/BV1X3411p7QA',
        },
        tag: ['news'],
        release: new Date('2022-03-30T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻: 微软要做更真实的气象模拟？',
        },
        des: {
            zh: '《微软模拟飞行》开发团队在近期举行了一场新的在线QA直播，透露了不少新消息，其他官方渠道也带来了不少新内容。在本期模飞新闻节目中就为大家汇总播报。',
        },
        thumbnailOriginal: './thumbnails/20220329.png',
        link: {
            youtube: 'https://youtu.be/xF_lNtBs_98',
            bilibili: 'https://www.bilibili.com/video/BV1KF411s7eC',
        },
        tag: ['news'],
        release: new Date('2022-03-29T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: WU8伊比利亚篇 · 33节侧风！',
        },
        des: {
            zh: '《微软模拟飞行》的全新世界更新：伊比利亚已于近日正式上线，依照惯例本次更新也带来了数个全新的当地机场着陆挑战。在本期节目中，大波胡将对其中3个挑战进行尝试，分别是著名进近 LEGE、史诗难度 LPPM，以及狂风挑战 LPPI。',
        },
        thumbnailOriginal: './thumbnails/20220327.png',
        link: {
            youtube: 'https://youtu.be/qoGOY3ZgXvk',
            bilibili: 'https://www.bilibili.com/video/BV1A44y1K7NX',
        },
        tag: ['test', 'landing'],
        release: new Date('2022-03-27T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '组队飞行全程: TBM930 @ 葡萄牙 (法鲁 - 里斯本) · 手输飞行计划，遭遇客机尾流',
        },
        des: {
            zh: '起飞: 法鲁机场 / LPFR (Aeroporto Internacional de Faro)；着陆: 里斯本机场 / LPPT (Aeroporto de Lisboa)；场景: 线上组队，当地时间下午，2022年3月26日实时天气',
        },
        thumbnailOriginal: './thumbnails/20220326.png',
        link: {
            youtube: 'https://youtu.be/Qd3xJqaLY8w',
            bilibili: 'https://www.bilibili.com/video/BV13u411B7X9',
        },
        tag: ['test', 'tour'],
        release: new Date('2022-03-26T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '云游戏延迟有多少？能玩模拟飞行吗？',
        },
        des: {
            zh: '最近，《微软模拟飞行》上线 XBOX 云游戏平台，对云游戏有了解的飞友们肯定会对操作延迟有疑问，在本期节目中，就来对模拟飞行云游戏版的操作延迟进行简单的对比测试。',
        },
        thumbnailOriginal: './thumbnails/20220321.png',
        link: {
            youtube: 'https://youtu.be/wv-eSaOpBZI',
            bilibili: 'https://www.bilibili.com/video/BV1vb4y1p7Hd',
        },
        tag: ['news', 'benchmark'],
        release: new Date('2022-03-21T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '快讯: 西班牙&葡萄牙即将翻新',
        },
        des: {
            zh: '《微软模拟飞行》世界更新第八弹以及当地传奇第三弹上线时间已官方确认：北京时间3月22日下午5点',
        },
        thumbnailOriginal: './thumbnails/20220320.png',
        link: {
            youtube: 'https://youtu.be/W68lK367-io',
            bilibili: 'https://www.bilibili.com/video/BV1BU4y1d7u5',
        },
        tag: ['news'],
        release: new Date('2022-03-20T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '组队飞行全程: TBM930 @ 冰岛 (凯夫拉维克 - 伊萨菲厄泽)',
        },
        des: {
            zh: '起飞: 凯夫拉维克国际机场 / BIKF (Keflavíkurflugvöllur)；着陆: 伊萨菲厄泽机场 / BIIS (Ísafjarðarflugvöllur)；场景: 线上组队，当地时间下午，2022年3月18日实时天气',
        },
        thumbnailOriginal: './thumbnails/20220319.png',
        link: {
            youtube: 'https://youtu.be/J6CbiTLx3mw',
            bilibili: 'https://www.bilibili.com/video/BV1Hu411q7q8',
        },
        tag: ['test', 'tour'],
        release: new Date('2022-03-19T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '无需改区域！修正航线规划和起飞后掉帧',
        },
        des: {
            zh: '《微软模拟飞行》有很多系统性的问题可以通过调整系统 Unicode 区域解决，但这种方法会造成很多程序产生兼容问题。现在大波胡发现了一个新方案，无需改区域！',
        },
        thumbnailOriginal: './thumbnails/20220317.png',
        link: {
            youtube: 'https://youtu.be/sR8aLtnSbIY',
            bilibili: 'https://www.bilibili.com/video/BV1Kq4y1q7sL',
        },
        tag: ['training', 'tip'],
        release: new Date('2022-03-17T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '社区调查: 长途飞行爆卡的元凶找到了？',
        },
        des: {
            zh: '最近有不少飞友们反馈，在《微软模拟飞行》中进行长途飞行时，有时飞着飞着帧率骤降，严重影响飞行体验。在前两天，有两名玩家分别发现了２个可能的原因以及临时解决方案，在本期视频中来一探究竟。',
        },
        thumbnailOriginal: './thumbnails/20220315.png',
        link: {
            youtube: 'https://youtu.be/vwZwC863n7M',
            bilibili: 'https://www.bilibili.com/video/BV1RF411s788',
        },
        tag: ['news'],
        release: new Date('2022-03-15T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '快讯：上海浦东登录游戏内市场',
        },
        des: {
            zh: '《微软模拟飞行》游戏内市场迎来新一轮更新，首座中国大陆机场的地景插件终于出现在了官方卖场中。',
        },
        thumbnailOriginal: './thumbnails/20220313.png',
        link: {
            youtube: 'https://youtu.be/bzp8JhAbAfU',
            bilibili: 'https://www.bilibili.com/video/BV1zY41137Kw',
        },
        tag: ['news'],
        release: new Date('2022-03-13T11:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻：四月底更新简体中文 · 官方解答热门话题',
        },
        des: {
            zh: '《微软模拟飞行》开发团队在近期举行了一场新的在线QA直播，透露了不少新消息，其他官方渠道也带来了不少新内容。在本期模飞新闻节目中就为大家汇总播报。',
        },
        thumbnailOriginal: './thumbnails/20220308.png',
        link: {
            youtube: 'https://youtu.be/1FLX1n9-PHU',
            bilibili: 'https://www.bilibili.com/video/BV1oF411x7R4',
        },
        tag: ['news'],
        release: new Date('2022-03-08T15:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '小技巧: 视角锁定模式',
        },
        des: {
            zh: '全新的《微软模拟飞行》中有着非常强大的视角控制能力，但预设的视角并不多，也让很多玩家产生了游戏在这方面能力欠缺的错觉。看完本期视频，大家应该就能了解如何控制追踪视角了！',
        },
        thumbnailOriginal: './thumbnails/20220305.png',
        link: {
            youtube: 'https://youtu.be/28q2eQAQr2g',
            bilibili: 'https://www.bilibili.com/video/BV1DF411x7bJ',
        },
        tag: ['training', 'tip'],
        release: new Date('2022-03-05T10:50:00+0800').valueOf(),
    },

    {
        name: {
            zh: '简评: 新螺旋桨气动对帧率有多大影响？',
        },
        des: {
            zh: '在《微软模拟飞行》全新版本中，有三款飞机实装了全新的螺旋桨气动模型，从物理原理上对螺旋桨产生的拉力进行模拟，有很多飞友担心全新模型会让CPU压力变大。在本期节目中，就来对更新前后的螺旋桨气动模型进行简单的对比测试，来看看CPU的压力到底有没有变化。',
        },
        thumbnailOriginal: './thumbnails/20220304.png',
        link: {
            youtube: 'https://youtu.be/lW0996W6JQw',
            bilibili: 'https://www.bilibili.com/video/BV1aY411G7mB',
        },
        tag: ['news', 'benchmark'],
        release: new Date('2022-03-04T10:40:00+0800').valueOf(),
    },

    {
        name: {
            zh: '上手体验: 云游戏版！微软模拟飞行',
        },
        des: {
            zh: '最新一批XBOX云游戏更新中加入了《微软模拟飞行》！大波胡第一时间进行上手体验。',
        },
        thumbnailOriginal: './thumbnails/20220302.png',
        link: {
            youtube: 'https://youtu.be/AwbCLJnFrj4',
            bilibili: 'https://www.bilibili.com/video/BV1eu411D79x',
        },
        tag: ['news', 'test'],
        release: new Date('2022-03-02T10:40:00+0800').valueOf(),
    },

    {
        name: {
            zh: '快讯: 安-2跳票 D17顶替',
        },
        des: {
            zh: '著名飞行器第一弹将在3月1日开卖，但并不是原计划的运-5原型机安-2，现确认为 Carenado 工作室合作开发的比奇 D17。',
        },
        thumbnailOriginal: './thumbnails/20220227.png',
        link: {
            youtube: 'https://youtu.be/oSLgIvK-BeA',
            bilibili: 'https://www.bilibili.com/video/BV1ra411C7Us',
        },
        tag: ['news'],
        release: new Date('2022-02-27T20:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '飞行全程: AI生成的基辅市',
        },
        des: {
            zh: '今天请大家跟随大波胡驾驶的这架飞机来游览微软模拟飞行AI生成的乌克兰首都基辅市。',
        },
        thumbnailOriginal: './thumbnails/20220226.png',
        link: {
            youtube: 'https://youtu.be/1vEMH4ZQgGM',
            bilibili: 'https://www.bilibili.com/video/BV1HL411T7LN',
        },
        tag: ['test', 'tour'],
        release: new Date('2022-02-26T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: 'AI景观: 乌克兰基辅鲍里斯波尔国际机场',
        },
        des: {
            zh: '欢迎来到乌克兰首都基辅，眼前的是鲍里斯波尔国际机场。在今天的节目中，我们就来看看微软的AI将基辅鲍里斯波尔国际机场还原成了啥样。',
        },
        thumbnailOriginal: './thumbnails/20220225.jpg',
        link: {
            youtube: 'https://youtu.be/XWidDccqM88',
            bilibili: 'https://www.bilibili.com/video/BV1U3411L7Lz',
        },
        tag: ['flight', 'tour'],
        release: new Date('2022-02-25T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: 印尼WX53 - 超高难度',
        },
        des: {
            zh: '欢迎来到印度尼西亚巴布亚岛布加拉加，我们即将降落在当地的简易跑道。有很多飞友表示这里的着陆挑战难度相当高，甚至可以说是当前最难，那么今天大波胡就来刷个分。',
        },
        thumbnailOriginal: './thumbnails/20220224.png',
        link: {
            youtube: 'https://youtu.be/BVf9WNZlLnA',
            bilibili: 'https://www.bilibili.com/video/BV1za41187FA',
        },
        tag: ['test', 'landing'],
        release: new Date('2022-02-24T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '快讯: 模拟飞行官方预览全新气动模型',
        },
        des: {
            zh: '《微软模拟飞行》官方在近期放出了一段全新的特色探索系列视频，介绍即将于上半年实装的２个全新气动模拟方式。',
        },
        thumbnailOriginal: './thumbnails/20220221.png',
        link: {
            youtube: 'https://youtu.be/UUODnfo9au8',
            bilibili: 'https://www.bilibili.com/video/BV17Z4y1d7rd',
        },
        tag: ['news'],
        release: new Date('2022-02-21T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '飞行摇杆与街机摇杆的差异',
        },
        des: {
            zh: '回答观众提问：飞行摇杆外设与街机格斗游戏摇杆的区别是什么',
        },
        thumbnailOriginal: './thumbnails/20220220.jpg',
        link: {
            youtube: 'https://youtu.be/fAQHhgfGNhM',
            bilibili: 'https://www.bilibili.com/video/BV1Sr4y167F9',
        },
        tag: ['training', 'tip'],
        release: new Date('2022-02-20T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '你知道吗？MSFS的航电是浏览器！？',
        },
        des: {
            zh: '今天为大家带来一则对飞行没什么用的冷知识——《微软模拟飞行》的航电与UI都是浏览器渲染的！',
        },
        thumbnailOriginal: './thumbnails/20220216.jpg',
        link: {
            youtube: 'https://youtu.be/aogbFWMsnfU',
            bilibili: 'https://www.bilibili.com/video/BV1P44y1p7GK',
        },
        tag: ['training', 'tip'],
        release: new Date('2022-02-16T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: SU8限定 · 超真实阴云 · 雪地里诺斯特德',
        },
        des: {
            zh: '系统更新第八弹现已开始公开测试，在这即将于3月1日正是更新的补丁中，新增了一项限时着陆挑战——CJ4降落雪天的里诺斯特德机场。',
        },
        thumbnailOriginal: './thumbnails/20220214.png',
        link: {
            youtube: 'https://youtu.be/UALm4mOI-bE',
            bilibili: 'https://www.bilibili.com/video/BV1MS4y1V7tg',
        },
        tag: ['test', 'landing'],
        release: new Date('2022-02-14T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻：“清理行动”始动 · SU8公测体验',
        },
        des: {
            zh: '《微软模拟飞行》系统更新第八弹现已开始公开测试，本人也在第一时间登入公测服务器进行体验，本期节目中为大家带来下次大型更新的内容总览。',
        },
        thumbnailOriginal: './thumbnails/20220212.png',
        link: {
            youtube: 'https://youtu.be/A9nF8tbshAM',
            bilibili: 'https://www.bilibili.com/video/BV1qS4y1C74f',
        },
        tag: ['news'],
        release: new Date('2022-02-12T15:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: WU7澳大利亚篇',
        },
        des: {
            zh: '世界更新：澳大利亚已于近日正式上线，依照惯例本次更新也带来了数个全新的澳大利亚着陆挑战。在本期节目中，大波胡将对其中3个挑战进行尝试，分别是史诗难度的 YKAT，YMAA，以及狂风难度的 YHOT。',
        },
        thumbnailOriginal: './thumbnails/20220207.png',
        link: {
            youtube: 'https://youtu.be/lNJAQF3sbAE',
            bilibili: 'https://www.bilibili.com/video/BV1b44y1W794',
        },
        tag: ['test', 'landing'],
        release: new Date('2022-02-07T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '飞行全程: 全新墨尔本',
        },
        des: {
            zh: '世界更新：澳大利亚已于近日上线。今天来搭乘大波胡驾驶的这架飞机游览下全新的墨尔本！',
        },
        thumbnailOriginal: './thumbnails/20220205.png',
        link: {
            youtube: 'https://youtu.be/xJzH-s6_4XI',
            bilibili: 'https://www.bilibili.com/video/BV1nT4y1C7Nf',
        },
        tag: ['test', 'tour'],
        release: new Date('2022-02-05T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '家用空客完全体',
        },
        des: {
            zh: '大波胡又购入了一款模拟飞行外设——图马斯特出品的 TCA 空客套件的扩展包。本期节目中就来进行开箱体验。',
        },
        thumbnailOriginal: './thumbnails/20220204.png',
        link: {
            youtube: 'https://youtu.be/XVRkgtVxQvE',
            bilibili: 'https://www.bilibili.com/video/BV1KZ4y1o7ZW',
        },
        tag: ['training', 'device'],
        release: new Date('2022-02-04T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '飞行全程: 云回家过年',
        },
        des: {
            zh: '由于种种原因，Diablohu 今年无法回家过年，那么就来一次云回家吧！',
        },
        thumbnailOriginal: './thumbnails/20220203.png',
        link: {
            youtube: 'https://youtu.be/qWG7zwXTTiM',
            bilibili: 'https://www.bilibili.com/video/BV1zq4y1F7Rx',
        },
        tag: ['test'],
        release: new Date('2022-02-03T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '３人接连挑战全球最短跑道',
        },
        des: {
            zh: '萨巴岛胡安乔·E·伊劳斯金机场，该机场的跑道全球最短。',
        },
        thumbnailOriginal: './thumbnails/20220202.png',
        link: {
            youtube: 'https://youtu.be/Jr28iUv1PSM',
            bilibili: 'https://www.bilibili.com/video/BV1U34y127ts',
        },
        tag: ['clip'],
        release: new Date('2022-02-02T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻：MSFS将成最强气动模拟器？',
        },
        des: {
            zh: '《微软模拟飞行》开发团队在近日举行了一场在线QA直播，放出了大量猛料。在本期节目中就为大家汇总播报。',
        },
        thumbnailOriginal: './thumbnails/20220131.png',
        link: {
            youtube: 'https://youtu.be/Ob8y-I4BILM',
            bilibili: 'https://www.bilibili.com/video/BV1p3411E7uS',
        },
        tag: ['news'],
        release: new Date('2022-01-31T17:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '震惊！喷气客机硬闯加勒比小岛',
        },
        des: {
            zh: '古斯塔夫三世机场（又名圣巴泰勒米机场）是加勒比海中圣巴泰勒米岛上的小型机场，但这架客机她是要……',
        },
        thumbnailOriginal: './thumbnails/20220126.png',
        link: {
            youtube: 'https://youtu.be/IOYv3U9rHw0',
            bilibili: 'https://www.bilibili.com/video/BV1Dr4y1e7GV',
        },
        tag: ['clip'],
        release: new Date('2022-01-26T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '我的飞行外设选择',
        },
        des: {
            zh: '模拟飞行是一个拥有庞大外设群的系列，而大波胡选择了哪些软硬件呢？',
        },
        thumbnailOriginal: './thumbnails/20220122.png',
        link: {
            youtube: 'https://youtu.be/tQ2oLw8Jf-0',
            bilibili: 'https://www.bilibili.com/video/BV1b34y1i7oM',
        },
        tag: ['training', 'device'],
        release: new Date('2022-01-22T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '快讯: 官方汉化延期到4月',
        },
        des: {
            zh: '新年第一个噩耗',
        },
        thumbnailOriginal: './thumbnails/20220119.png',
        link: {
            youtube: 'https://youtu.be/uBWPRH3jqpk',
            bilibili: 'https://www.bilibili.com/video/BV1RR4y1M7yQ',
        },
        tag: ['news'],
        release: new Date('2022-01-19T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻: 双水獭 VS 大棕熊',
        },
        des: {
            zh: '欢迎来到2022年第一期模飞新闻节目。在此也祝各位飞友新年快乐！',
        },
        thumbnailOriginal: './thumbnails/20220110.png',
        link: {
            youtube: 'https://youtu.be/0uHMEP7VC0Q',
            bilibili: 'https://www.bilibili.com/video/BV1zr4y1v7XA',
        },
        tag: ['news'],
        release: new Date('2022-01-10T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '微软模拟飞行2022年前瞻',
        },
        des: {
            zh: '《微软模拟飞行》在2021年可谓焕发了第二春，展望来年，微软与 ASOBO 将会延续之前的承诺，在2022年继续对这一平台进行持续增强。本期视频来为大家汇总介绍下模拟飞行开发团队在2022年计划更新的内容。',
        },
        thumbnailOriginal: './thumbnails/20211231.png',
        link: {
            youtube: 'https://youtu.be/SJmwyDsOZJs',
            bilibili: 'https://www.bilibili.com/video/BV1oF411i7iR',
        },
        tag: ['training', 'news'],
        release: new Date('2021-12-31T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: 'FBW A380 外观预览',
        },
        des: {
            zh: 'FlyByWire 插件团队为我们献上圣诞礼物——其团队为开发 A380 插件机所开设的虚构机场。在机库里停留这一架A380的外壳，以及开发中的驾驶舱。在今天这期简短的视频中，大波胡来介绍下如何下载这一礼物，并在机场里游览一番。',
        },
        thumbnailOriginal: './thumbnails/20211222.jpg',
        link: {
            youtube: 'https://youtu.be/mdAXv6wEBYA',
            bilibili: 'https://www.bilibili.com/video/BV1or4y1U7XT',
        },
        tag: ['mod'],
        release: new Date('2021-12-22T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '试飞: ICON A5 拟真补丁',
        },
        des: {
            zh: 'ICON A5，这架单发螺旋桨的双座小型飞机可谓是当前《微软模拟飞行》中的一颗明珠。不过和许多内置的飞机一样，这架A5虽然比较精准的还原了飞行体验，但在气动等细节上还有些不足。现在有爱好者制作了一款拟真 MOD，力图完美还原真实。',
        },
        thumbnailOriginal: './thumbnails/20211220.jpg',
        link: {
            youtube: 'https://youtu.be/ZopSP0d3P18',
            bilibili: 'https://www.bilibili.com/video/BV1vm4y1X7XK',
        },
        tag: ['test', 'mod'],
        release: new Date('2021-12-20T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '戴上VR眼镜，飙飞机，耍特技 | 极限飞行：地平线 (伪)',
        },
        des: {
            zh: '戴上VR眼镜，以接近声速在国际都市飙飞机感觉会如何？',
        },
        thumbnailOriginal: './thumbnails/20211215.jpg',
        link: {
            youtube: 'https://youtu.be/57Z9TXEL9sE',
            bilibili: 'https://www.bilibili.com/video/BV1uq4y1B7ub',
        },
        tag: ['flight', 'tour'],
        release: new Date('2021-12-15T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '特技演练: 巴塞罗那',
        },
        des: {
            zh: 'L-39 MS / L-59 超级信天翁 | 西班牙巴塞罗那 | 2021年12月7日',
        },
        thumbnailOriginal: './thumbnails/20211207.jpg',
        link: {
            youtube: 'https://youtu.be/QONGGUr9NkU',
            bilibili: 'https://www.bilibili.com/video/BV1Ki4y1Z7vD',
        },
        tag: ['test'],
        release: new Date('2021-12-07T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '飞行全程: 夏威夷观光',
        },
        des: {
            zh: 'L-39 MS / L-59 超级信天翁 | 希洛国际机场 (PHTO / ITO) ＞ 丹尼尔·井上国际机场 (PHNL / HNL) | 2021年12月2日',
        },
        thumbnailOriginal: './thumbnails/20211203.jpg',
        link: {
            youtube: 'https://youtu.be/VxDIfmBGplU',
            bilibili: 'https://www.bilibili.com/video/BV1q34y1R7uz',
        },
        tag: ['test'],
        release: new Date('2021-12-03T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '官方本地化内容检查单',
        },
        des: {
            zh: '从8月中旬确定开发官方汉化，到计划明年2月正式上线。想必很多飞友都有疑问，不就是个界面翻译么？怎么要半年这么久？',
        },
        thumbnailOriginal: './thumbnails/20211129.jpg',
        link: {
            youtube: 'https://youtu.be/r0kb6KSy0NY',
            bilibili: 'https://www.bilibili.com/video/BV1Z3411t7Zk',
        },
        tag: ['news'],
        release: new Date('2021-11-29T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '如何开启黑视红视（G力模拟）',
        },
        des: {
            zh: '全新上线的微软模拟飞行年度游戏版引入了G力模拟，正确还原了在G力过大时的黑视或红视现象，以及后续的昏厥。不过该功能是默认关闭的。',
        },
        thumbnailOriginal: './thumbnails/20211122.jpg',
        link: {
            youtube: 'https://youtu.be/KkNUaWuD1t0',
            bilibili: 'https://www.bilibili.com/video/BV12Q4y1U7SH',
        },
        tag: ['training', 'tip'],
        release: new Date('2021-11-22T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: 'Volocity 操作入门',
        },
        des: {
            zh: '《微软模拟飞行》年度游戏版已正式上线，为所有玩家免费送上大号无人机 Volocity。今天来为大家介绍下这架观光神器的操作方式。',
        },
        thumbnailOriginal: './thumbnails/20211121.jpg',
        link: {
            youtube: 'https://youtu.be/dujEjyg7RZM',
            bilibili: 'https://www.bilibili.com/video/BV1FY4114726',
        },
        tag: ['training', 'test'],
        release: new Date('2021-11-21T11:35:00+0800').valueOf(),
    },

    {
        name: {
            zh: '倒数第一拿了金牌 - 里诺竞赛实况',
        },
        des: {
            zh: '里诺竞赛扩展包现已正式上线开卖，空中竞速赛正在微软模拟飞行上演。本期视频是近期大波胡的直播录像剪辑，包含3段里诺竞速比赛，头两段是亮点剪辑，最后一段是竞赛全程。',
        },
        thumbnailOriginal: './thumbnails/20211120.jpg',
        link: {
            youtube: 'https://youtu.be/ScyivuWRLLY',
            bilibili: 'https://www.bilibili.com/video/BV1yL411T7zD',
        },
        tag: ['test', 'test'],
        release: new Date('2021-11-20T11:35:00+0800').valueOf(),
    },

    {
        name: {
            zh: '超级大黄蜂如何开启加力（后燃）',
        },
        des: {
            zh: '微软模拟飞行年度游戏版已正式上线，F/A-18 超级大黄蜂已经进入了所有玩家的机库，不过有的飞友反应无法开启后燃器 Afterburner',
        },
        thumbnailOriginal: './thumbnails/20211119.jpg',
        link: {
            youtube: 'https://youtu.be/f9F7yiBReqc',
            bilibili: 'https://www.bilibili.com/video/BV1NY41147ok',
        },
        tag: ['training', 'tip'],
        release: new Date('2021-11-19T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '免费超级大黄蜂 & DX12、尾流更新 - 微软模拟飞行年度游戏版 & SU7',
        },
        des: {
            zh: '为了表达对新老飞友的感谢，《微软模拟飞行》决定推出名为“年度游戏版”的游戏内容扩展，将会带来备受期待的 F/A-18 超级大黄蜂战机以及更多的游戏内活动。此次更新也会包含全新的系统更新第七弹，带来全新的尾流、G力昏厥等模拟更新，PC 版也会先行实装 DirectX 12 API。在本期节目中，来为大家详细介绍下年度游戏版以及全新系统更新的内容。',
        },
        thumbnailOriginal: './thumbnails/20211117.jpg',
        link: {
            youtube: 'https://youtu.be/nMHzlSeNMUU',
            bilibili: 'https://www.bilibili.com/video/BV1VT4y1R7ra',
        },
        tag: ['training', 'news'],
        release: new Date('2021-11-17T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: 'A320neo - 法兰克福 ＞ 那不勒斯',
        },
        des: {
            zh: '借助全新的《微软模拟飞行》，我们可以轻松的还原现实生活中存在的航线。今天就请搭乘这架德国汉莎航空的 A320neo 客机，从法兰克福起飞，飞跃阿尔卑斯山，由地中海降至意大利那不勒斯。',
        },
        thumbnailOriginal: './thumbnails/20211113.jpg',
        link: {
            youtube: 'https://youtu.be/0PDaDzyuoHY',
            bilibili: 'https://www.bilibili.com/video/BV1pg411T7xg',
        },
        tag: ['flight', 'landing', 'tour'],
        release: new Date('2021-11-13T15:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '价格、飞机、游戏模式……前瞻：里诺竞赛扩展包',
        },
        des: {
            zh: '享负盛名的里诺飞行竞赛即将在《微软模拟飞行》中进行，游戏中将会新增数款新飞机以及全新的多人竞速模式，在本期节目中我们就来对里诺扩展包进行全面剖析。',
        },
        thumbnailOriginal: './thumbnails/20211103.jpg',
        link: {
            youtube: 'https://youtu.be/-hPL5zR-nhc',
            bilibili: 'https://www.bilibili.com/video/BV1qS4y1R7Ss',
        },
        tag: ['training', 'news'],
        release: new Date('2021-11-03T11:10:00+0800').valueOf(),
    },

    {
        name: {
            zh: '多人竞速模式封测体验 (里诺飞行竞赛)',
        },
        des: {
            zh: '《微软模拟飞行》即将在下个月上线一个全新游戏内容：以里诺飞行竞赛为主题的多人竞速模式。开发组在最近开始了一轮限时封闭内测，大波胡有幸获得了测试资格，本期视频就是我个人上手体验的游戏录像。',
        },
        thumbnailOriginal: './thumbnails/20211023.jpg',
        link: {
            youtube: 'https://youtu.be/1bhy2E7eWdo',
            bilibili: 'https://www.bilibili.com/video/BV1GQ4y1Q71F/',
        },
        tag: ['news', 'test'],
        release: new Date('2021-10-23T21:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻: 系统更新６上线 & 年度版超大更新',
        },
        des: {
            zh: '系统更新第六弹的现已上线，包含巨量修正和优化；下月将迎来里诺飞行竞赛DLC与年度版超大更新；在本期视频中，我们来看看新补丁的改动，以及下月更新的预告。',
        },
        thumbnailOriginal: './thumbnails/20211020.jpg',
        link: {
            youtube: 'https://youtu.be/ScWLXj_g6qc',
            bilibili: 'https://www.bilibili.com/video/BV1Cf4y1g7nv',
        },
        tag: ['news'],
        release: new Date('2021-10-20T11:30:00+0800').valueOf(),
    },

    {
        name: {
            zh: 'A320neo - 上海虹桥 ＞ 海口美兰',
        },
        des: {
            zh: '台风圆规刚刚经过南海，在我国华南地区上空留下了层层云雾。全新《微软模拟飞行》的实时天气系统很好的还原了当时的景象。接下来请大家乘坐这架 A320 neo，从上海虹桥飞往海口美兰，一同领略云间仙境。',
        },
        thumbnailOriginal: './thumbnails/20211016.jpg',
        link: {
            youtube: 'https://youtu.be/oljBLCUkRXY',
            bilibili: 'https://www.bilibili.com/video/BV1sh411J7bi/',
        },
        tag: ['flight', 'landing', 'tour'],
        release: new Date('2021-10-15T11:30:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻: 系统更新６前瞻 & 后续计划揭秘',
        },
        des: {
            zh: '在今天早些时候，《微软模拟飞行》团队进行了一期在线QA直播。都公布了哪些信息？探讨了什么内容？本期视频我们来一探究竟',
        },
        thumbnailOriginal: './thumbnails/20210930.jpg',
        link: {
            youtube: 'https://youtu.be/eXuqjRtTU-s',
            bilibili: 'https://www.bilibili.com/video/BV15L411s79P/',
        },
        tag: ['news'],
        release: new Date('2021-09-30T14:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: 黄昏阵风 - 克拉根福',
        },
        des: {
            zh: '克拉根福机场（Airport Klagenfurt），机场位于奥地利南部城市克拉根福，坐落于克拉根福谷地的沃尔特湖畔。由于地形原因，在黄昏时分常有阵风。',
        },
        thumbnailOriginal: './thumbnails/20210924.jpg',
        link: {
            youtube: 'https://youtu.be/pQUS63Si_5s',
            bilibili: 'https://www.bilibili.com/video/BV1oq4y1A7Bq',
        },
        tag: ['test', 'landing'],
        release: new Date('2021-09-24T11:30:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻: 世界更新６热修补丁 & 后续开发计划',
        },
        des: {
            zh: '在本期视频中，我们来看看新补丁的改动，以及开发组今后几个月的开发计划',
        },
        thumbnailOriginal: './thumbnails/20210920.jpg',
        link: {
            youtube: 'https://youtu.be/gjcaty4IqXE',
            bilibili: 'https://www.bilibili.com/video/BV1Nf4y1E7JX',
        },
        tag: ['news'],
        release: new Date('2021-09-20T11:30:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: 陡峭进近 - 卢加诺',
        },
        des: {
            zh: '卢加诺机场（Aeroporto di Lugano），又名：卢加诺-阿尼奥机场（Lugano-Agno），由于山谷地形，该跑道的仪表进近有着 6.65° 的下滑坡道，远高于标准的 3°。甚至比著名的伦敦城机场的 5.5° 还要陡峭。',
        },
        thumbnailOriginal: './thumbnails/20210916.jpg',
        link: {
            youtube: 'https://youtu.be/b4rZ_IwzqME',
            bilibili: 'https://www.bilibili.com/video/BV1nL4y187JZ',
        },
        tag: ['test', 'landing'],
        release: new Date('2021-09-16T11:30:00+0800').valueOf(),
    },

    {
        name: {
            zh: 'TBM930 硬闯台风灿都',
        },
        des: {
            zh: '请大家登上这架 TBM930，从天津滨海国际机场起飞，前往上海浦东，挑战台风天气下的夜间着陆。大波胡的生死，就在接下来的几分钟决定！',
        },
        thumbnailOriginal: './thumbnails/20210914.jpg',
        link: {
            youtube: 'https://youtu.be/-7E2qOY76nI',
            bilibili: 'https://www.bilibili.com/video/BV1Mb4y127ZZ',
        },
        tag: ['flight', 'landing', 'tour'],
        release: new Date('2021-09-14T13:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '世界更新６全新系统修改',
        },
        des: {
            zh: '延期两周的世界更新第６弹终于上线，德国、奥地利和瑞士的地景得到了全面加强。接下来，我们来看看全新的世界更新带来了哪些系统性修改，以及对性能的影响。',
        },
        thumbnailOriginal: './thumbnails/20210910.jpg',
        link: {
            youtube: 'https://youtu.be/CtrVUtDmNs0',
            bilibili: 'https://www.bilibili.com/video/BV1S34y1Q7Pv',
        },
        tag: ['news'],
        release: new Date('2021-09-10T12:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '无限可能的模拟飞行 - 游戏玩法挖掘',
        },
        des: {
            zh: '全新的《微软模拟飞行》登录 XBOX 平台已经有一个月了，其凭借优秀的画面以及系列长久的口碑，涌入了一大批新玩家。但新晋飞行员们很快就发现，在这所谓的游戏里基本没啥事儿干。本期视频就来为大家介绍下更多的游戏方式，丰富飞行模拟体验。',
        },
        thumbnailOriginal: './thumbnails/20210905.jpg',
        link: {
            youtube: 'https://youtu.be/9A1tPdN5AUk',
            bilibili: 'https://www.bilibili.com/video/BV1Uq4y1U7Y4',
        },
        tag: ['training'],
        release: new Date('2021-09-05T16:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: 俯冲降落 - 圣巴泰勒米',
        },
        des: {
            zh: '圣巴泰勒米-雷米·德·哈嫩机场，位于加勒比海中法国海外领地圣巴泰勒米岛。受地理条件限制，跑道两侧的起降都极具挑战。曾荣登历史频道全球最危险机场榜的第三名。',
        },
        thumbnailOriginal: './thumbnails/20210827.jpg',
        link: {
            youtube: 'https://youtu.be/tXImGxbN_ns',
            bilibili: 'https://www.bilibili.com/video/BV1Sq4y1M7rs',
        },
        tag: ['test', 'landing'],
        release: new Date('2021-08-27T11:20:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻: 世界更新６详情 & 飞行出租车 & 多人竞速模式',
        },
        des: {
            zh: '就在刚刚进行的德国科隆游戏展 Gamescom 的 Xbox 发布会直播上，《微软模拟飞行》负责人 Jorg Neuman 公布了游戏近期即将上线的新内容',
        },
        thumbnailOriginal: './thumbnails/20210825.jpg',
        link: {
            youtube: 'https://youtu.be/hfXnSLjadCQ',
            bilibili: 'https://www.bilibili.com/video/BV1DQ4y1Y7ZL',
        },
        tag: ['news'],
        release: new Date('2021-08-25T11:20:00+0800').valueOf(),
    },

    {
        name: {
            zh: '快讯: 世界更新６延期',
        },
        des: {
            zh: '微软模拟飞行官方近日宣布，原定于8月24日上线的世界更新第6弹将会延期两周，计划在9月7日上线',
        },
        thumbnailOriginal: './thumbnails/20210822.jpg',
        link: {
            youtube: 'https://youtu.be/C1EnFX1q1e8',
            bilibili: 'https://www.bilibili.com/video/BV1VQ4y117cB',
        },
        tag: ['news'],
        release: new Date('2021-08-22T11:20:00+0800').valueOf(),
    },

    {
        name: {
            zh: 'AI景观: 阿富汗喀布尔国际机场',
        },
        des: {
            zh: '哈米德·卡尔扎伊国际机场，又名喀布尔机场，坐落于阿富汗首都喀布尔市，距离市区5公里，是阿富汗境内最主要的国际机场之一，也是全国最大的军事基地，可容纳上百架飞机。',
        },
        thumbnailOriginal: './thumbnails/20210817.jpg',
        link: {
            youtube: 'https://youtu.be/L7BIV6baDDo',
            bilibili: 'https://www.bilibili.com/video/BV1f3411z7Nc',
        },
        tag: ['flight', 'tour'],
        release: new Date('2021-08-17T12:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: 全球最危险 - 卢克拉',
        },
        des: {
            zh: '丹增-希拉里机场（Tenzing–Hillary Airport），又名卢克拉机场（Lukla Airport）。由于严酷的地理条件，被很多人誉为全球最危险的机场。进近时没有复飞可能，任何失误都有可能机毁人亡。',
        },
        thumbnailOriginal: './thumbnails/20210812.jpg',
        link: {
            youtube: 'https://youtu.be/6vUEun4xOhc',
            bilibili: 'https://www.bilibili.com/video/BV1v3411z7kc',
        },
        tag: ['test', 'landing'],
        release: new Date('2021-08-12T12:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻: SU5 画质热修更新对比',
        },
        des: {
            zh: '为解决系统更新第5弹带来的各种画质问题，ASOBO 加班加点为《微软模拟飞行》带来了一个全新补丁。接下来我们来看看画质相关修正的改进效果。',
        },
        thumbnailOriginal: './thumbnails/20210808.jpg',
        link: {
            youtube: 'https://youtu.be/7NzwvnVcWLo',
            bilibili: 'https://www.bilibili.com/video/BV13h411B7u9',
        },
        tag: ['news', 'benchmark'],
        release: new Date('2021-08-08T12:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻: SU5 补救计划',
        },
        des: {
            zh: '北京时间8月4日深夜，ASOBO在官方论坛上发帖，针对玩家们近期对SU5更新普遍反馈的各种问题进行了集中解释，并计划在数日后会上线一个热更新补丁修复大多数问题。',
        },
        thumbnailOriginal: './thumbnails/20210806.jpg',
        link: {
            youtube: 'https://youtu.be/8iQed1vcq4M',
            bilibili: 'https://www.bilibili.com/video/BV1MQ4y127zy',
        },
        tag: ['news'],
        release: new Date('2021-08-06T12:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: 'VR试飞 - 水城威尼斯 (修正流畅度)',
        },
        des: {
            zh: '再次尝试录制 VR 飞行，流畅度有很大改观！这次来从空中游览水城威尼斯',
        },
        thumbnailOriginal: './thumbnails/20210805.jpg',
        link: {
            youtube: 'https://youtu.be/ABHk8Z1QvJw',
            bilibili: 'https://www.bilibili.com/video/BV1xq4y1p7cu',
        },
        tag: ['test'],
        release: new Date('2021-08-05T12:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: 'VR 试飞 (录像测试)',
        },
        des: {
            zh: '《微软模拟飞行》2020 PC 版支持虚拟现实 (VR)，可以完全沉浸在驾驶舱中。',
        },
        thumbnailOriginal: './thumbnails/20210804.jpg',
        link: {
            youtube: 'https://youtu.be/tcShJcXB0qA',
            bilibili: 'https://www.bilibili.com/video/BV1h64y1B7g8',
        },
        tag: ['test'],
        release: new Date('2021-08-04T12:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '修正：PC版地景 (SU5)',
        },
        des: {
            zh: '在《微软模拟飞行》最新的大更新中，游戏的帧率表现得到了大幅优化，但很多玩家表示画质缩水了。经过反复测试，我发现了这两个问题的原因，也找到了修正方案。',
        },
        thumbnailOriginal: './thumbnails/20210801.jpg',
        link: {
            youtube: 'https://youtu.be/F4ajh5X7NvM',
            bilibili: 'https://www.bilibili.com/video/BV1W44y117Kx',
        },
        tag: ['news', 'tip'],
        release: new Date('2021-08-01T12:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '如何还原旧版仪表操作 (SU5)',
        },
        des: {
            zh: 'PC版《微软模拟飞行》最新的大更新后，引入了全新的舱内仪表互动方式，不过直接改变操作习惯着实令人诟病。其实游戏允许改回原来的方式。',
        },
        thumbnailOriginal: './thumbnails/20210730.jpg',
        link: {
            youtube: 'https://youtu.be/yJFjoVGbOJ4',
            bilibili: 'https://www.bilibili.com/video/BV18q4y1X7tb',
        },
        tag: ['training', 'tip'],
        release: new Date('2021-07-30T12:30:00+0800').valueOf(),
    },

    {
        name: {
            zh: '性能优化实测：卡顿成为历史',
        },
        des: {
            zh: '全新的《微软模拟飞行》由于对硬件的需求相当高，已经被玩家们戏称为次世代显卡危机。随着 XBOX 版的问世，PC 版也得到了同步更新，此次更新针对渲染效率进行了大幅优化。',
        },
        thumbnailOriginal: './thumbnails/20210728.jpg',
        link: {
            youtube: 'https://youtu.be/-EDRvlOLwPs',
            bilibili: 'https://www.bilibili.com/video/BV1Bo4y1Q7mi',
        },
        tag: ['news', 'benchmark'],
        release: new Date('2021-07-28T20:30:00+0800').valueOf(),
    },

    {
        name: {
            zh: '入门教学: XBOX 手柄开飞机',
        },
        des: {
            zh: '全新的《微软模拟飞行》XBOX 版本即将上线，很多玩家或许都会有一个疑问——手柄怎么开飞机？操作顺畅么？',
        },
        thumbnailOriginal: './thumbnails/20210725.jpg',
        link: {
            youtube: 'https://youtu.be/vO6syWJw0Hg',
            bilibili: 'https://www.bilibili.com/video/BV1f44y1y74T',
        },
        tag: ['training', 'device'],
        release: new Date('2021-07-25T16:30:00+0800').valueOf(),
    },

    {
        name: {
            zh: '快讯: 官宣！巨大帧率提升',
        },
        des: {
            zh: '昨日预告的“巨大”帧率提升是真的！在最新的 Twitch 直播中，《微软模拟飞行》官方展示了这一即将到来的改进。',
        },
        thumbnailOriginal: './thumbnails/20210701.jpg',
        link: {
            youtube: 'https://youtu.be/39l8dDDlUMo',
            bilibili: 'https://www.bilibili.com/video/BV1F64y1b73T',
        },
        tag: ['news'],
        release: new Date('2021-07-01T23:30:00+0800').valueOf(),
    },

    {
        name: {
            zh: '快讯: “巨大”帧率提升',
        },
        des: {
            zh: '当前最强PC硬件依然无法保证《微软模拟飞行》60帧的流畅运行。现在有一个好消息！官方公布了一个名为 PerformancePLUS 的内测计划，目标很明确：大幅提升游戏的帧率表现。',
        },
        thumbnailOriginal: './thumbnails/20210630.jpg',
        link: {
            youtube: 'https://youtu.be/U1kiHKyHA0k',
            bilibili: 'https://www.bilibili.com/video/BV1uf4y1b7xt',
        },
        tag: ['news'],
        release: new Date('2021-06-30T19:30:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: Svalbard lufthavn - 雪盲',
        },
        des: {
            zh: '微软模拟飞行的世界更新第5弹：北欧，已于近日正式上线。按照惯例，本次更新也带来了所属地区的着陆挑战。今天我们来挑战的这座机场名为……Svalbard lufthavn, Longyearbyen (ICAO: ENSB | IATA: LYR) 机场位于挪威最北部的斯瓦尔巴群岛，是全球目前最接近北极的拥有定期航班的机场。此次着陆挑战中机场被厚厚的积雪覆盖，对准跑道将会是一大难题。',
        },
        thumbnailOriginal: './thumbnails/20210625.jpg',
        link: {
            youtube: 'https://youtu.be/_Xh8r4T63mE',
            bilibili: 'https://www.bilibili.com/video/BV1Rv411n7zG',
        },
        tag: ['test', 'landing'],
        release: new Date('2021-06-25T12:05:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: Ísafjörður - 180°调头进近',
        },
        des: {
            zh: '微软模拟飞行的世界更新第5弹：北欧，已于近日正式上线。按照惯例，本次更新也带来了所属地区的着陆挑战。今天我们先来挑战的这座机场名为……呃…… Ísafjarðarflugvöllur （伊萨菲厄泽机场）。机场地处冰岛西北部，由于地形原因，基本只能选用 08 跑道着陆，而进近则需要贴着周围的山脉来一个180°调头，难度颇高',
        },
        thumbnailOriginal: './thumbnails/20210624.jpg',
        link: {
            youtube: 'https://youtu.be/7FV0uab-wg8',
            bilibili: 'https://www.bilibili.com/video/BV1m64y197jk',
        },
        tag: ['test', 'landing'],
        release: new Date('2021-06-24T12:05:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻: 4K30帧 & 新UI & 德国更新 & 超音速？',
        },
        des: {
            zh: '在本周早些时候的 Xbox E3 加场直播以及模拟飞行官方的 Twitch 直播中，项目负责人 Jorg Neumann 透露了有关 XBOX 版，以及 PC 版更新的更多信息。',
        },
        thumbnailOriginal: './thumbnails/20210621.jpg',
        link: {
            youtube: 'https://youtu.be/6z7U6HVbbEg',
            bilibili: 'https://www.bilibili.com/video/BV15U4y1G7Aj',
        },
        tag: ['news'],
        release: new Date('2021-06-21T10:30:00+0800').valueOf(),
    },

    {
        name: {
            zh: '航线介绍: 全日本唯一直升机航班 - 东京爱LAND',
        },
        des: {
            zh: '日本的公共交通之发达举世闻名，但大家可曾想过，日本是否有直升机航班呢？在伊豆群岛间日常穿梭的“东京爱LAND通勤航班”定期商业航线就是答案。在本期航线介绍节目中，我们就来一探究竟……',
        },
        thumbnailOriginal: './thumbnails/20210619.jpg',
        link: {
            youtube: 'https://youtu.be/-JQLYdvrt1A',
            bilibili: 'https://www.bilibili.com/video/BV1EU4y1G7br',
        },
        tag: ['route'],
        release: new Date('2021-06-19T12:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '新闻: XBOX版本日期 & 壮志凌云免费DLC',
        },
        des: {
            zh: '在几个小时前进行的 Xbox E3 发布直播上，ASOBO 携模拟飞行登台，主要公布了 3 大内容',
        },
        thumbnailOriginal: './thumbnails/20210614.jpg',
        link: {
            youtube: 'https://youtu.be/bEsFG7x9LHQ',
            bilibili: 'https://www.bilibili.com/video/BV1Ry4y1u7VT',
        },
        tag: ['news'],
        release: new Date('2021-06-14T12:46:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: Sirena - 草坪机场侧风挑战',
        },
        des: {
            zh: '哥斯达黎加一座国家公园内的草坪跑道机场，在侧风条件下的着陆难都会有多高呢？在《微软模拟飞行》5月更新中，带来了该机场的降落挑战。',
        },
        thumbnailOriginal: './thumbnails/20210531.jpg',
        link: {
            youtube: 'https://youtu.be/yqV7oCybH-I',
            bilibili: 'https://www.bilibili.com/video/BV1iK4y1R7UU',
        },
        tag: ['test', 'landing'],
        release: new Date('2021-06-01T17:35:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: La Salette - 山峰上坡草地',
        },
        des: {
            zh: '这条法国阿尔卑斯山区中的草地跑道着陆难度颇高。在《微软模拟飞行》4月更新中，带来了该机场的着陆挑战。',
        },
        thumbnailOriginal: './thumbnails/20210418.jpg',
        link: {
            youtube: 'https://youtu.be/QDDJM5V6Wsk',
            bilibili: 'https://www.bilibili.com/video/BV1A64y1i7fT',
        },
        tag: ['test', 'landing'],
        release: new Date('2021-04-18T11:35:00+0800').valueOf(),
    },

    {
        name: {
            zh: '全球AI船舶交通',
        },
        des: {
            zh: '一款名为“全球AI船舶交通”（Global AI Ship Traffic MSFS）的第三方插件问世，为水面增加了一些活力',
        },
        thumbnailOriginal: './thumbnails/20210413.jpg',
        link: {
            youtube: 'https://youtu.be/1mfi-0LJjvg',
            bilibili: 'https://www.bilibili.com/video/BV1rZ4y1c79A',
        },
        tag: ['mod'],
        release: new Date('2021-04-13T11:35:00+0800').valueOf(),
    },

    {
        name: {
            zh: '纸箱喷火战斗机',
        },
        des: {
            zh: 'Supermarine Spitfire 喷火战斗机。皇家空军之骄傲，将纳粹德军扫出不列颠岛之功臣。梅林引擎的轰鸣声曾为伦敦人民带来希望。而如今……',
        },
        thumbnailOriginal: './thumbnails/20210404.jpg',
        link: {
            youtube: 'https://youtu.be/8nnNb-wHqnU',
            bilibili: 'https://www.bilibili.com/video/BV1PZ4y1c7hA',
        },
        tag: ['mod'],
        release: new Date('2021-04-04T11:35:00+0800').valueOf(),
    },

    {
        name: {
            zh: '着陆挑战: Chagual - 山区急转弯',
        },
        des: {
            zh: '秘鲁山区中的 Chagual 机场以进近难度高而闻名。在《微软模拟飞行》3月初的更新中，带来了该机场的着陆挑战。',
        },
        thumbnailOriginal: './thumbnails/20210317.jpg',
        link: {
            youtube: 'https://youtu.be/Um8URjl9zn4',
            bilibili: 'https://www.bilibili.com/video/BV1Hb4y1Q7UA',
        },
        tag: ['test', 'landing'],
        release: new Date('2021-03-17T12:00:00+0800').valueOf(),
    },

    {
        name: {
            zh: '机场介绍: 跑道 × 公路 - 直布罗陀国际机场',
        },
        des: {
            zh: '我们来见识下这个星球上仅有的一座跑道与公路交汇的机场——直布罗陀国际机场',
        },
        thumbnailOriginal: './thumbnails/20210314.jpg',
        link: {
            youtube: 'https://youtu.be/IW7Qnyd-6hg',
            bilibili: 'https://www.bilibili.com/video/BV1Vr4y1P72k',
        },
        tag: ['airport'],
        release: 1615694400000,
    },

    {
        name: {
            zh: '航线介绍: 一分钟! 全球最短航线 - 韦斯特雷',
        },
        des: {
            zh: '一条飞行时间不足两分钟的商业航线？存在的意义又是什么？',
        },
        thumbnailOriginal: './thumbnails/20210223.jpg',
        link: {
            youtube: 'https://youtu.be/O-P03s_acKU',
            bilibili: 'https://www.bilibili.com/video/BV16V411e7qz',
        },
        tag: ['route'],
        release: 1614052800000,
    },

    {
        name: {
            zh: '着陆挑战: 英国更新 - EG78 + EGHI',
        },
        des: {
            zh: '经历了快一个月的跳票后，《微软模拟飞行》的英国更新终于上线，除了万众期待的英伦三岛及爱尔兰的地景更新外，此次更新还带来了 2 个全新的着陆挑战，均属于强风挑战，那么接下来大波胡就来作死了~',
        },
        thumbnailOriginal: './thumbnails/20210218.jpg',
        link: {
            youtube: 'https://youtu.be/aB7Aw8-1F3Q',
            bilibili: 'https://www.bilibili.com/video/BV1kV411i7oZ',
        },
        tag: ['test', 'landing'],
        release: 1613620800000,
    },

    {
        name: {
            zh: '机场介绍: C·罗机场',
        },
        des: {
            zh: '图马斯特（Thrustmaster）TCA 空客摇杆可以说是目前市面上比较火爆的一款模拟飞行控制器，不过很多朋友应该都遇到了尾舵操作随机偏移的问题。好在这个问题是可以通过简单的拆解就能修理的。今天我们就来动手修理一下~',
        },
        thumbnailOriginal: './thumbnails/20210201.jpg',
        link: {
            youtube: 'https://youtu.be/8Q3lot3M9a0',
            bilibili: 'https://www.bilibili.com/video/BV1Zv411Y7Y5',
        },
        tag: ['airport'],
        release: 1612152000000,
    },

    {
        name: {
            zh: '动手修理图马斯特摇杆',
        },
        des: {
            zh: '图马斯特（Thrustmaster）TCA 空客摇杆可以说是目前市面上比较火爆的一款模拟飞行控制器，不过很多朋友应该都遇到了尾舵操作随机偏移的问题。好在这个问题是可以通过简单的拆解就能修理的。今天我们就来动手修理一下~',
        },
        thumbnailOriginal: './thumbnails/20210124.jpg',
        link: {
            youtube: 'https://youtu.be/Q9ygEejv0lw',
            bilibili: 'https://www.bilibili.com/video/BV1JA411p75z',
        },
        tag: ['training', 'device'],
        release: 1611462600000,
    },

    {
        name: {
            zh: '航母 MOD',
        },
        des: {
            zh: '看！那是什么！是航母！这是一套为微软模拟飞行打造的航母MOD，由 HARD DECK SIMULATION（HDS）开发，售价15美元。在本期节目中我们会尝试在航母上起降各种类型的飞机，在视频后半则会介绍该 MOD 的安装、配置介绍。',
        },
        thumbnailOriginal: './thumbnails/20210110.jpg',
        link: {
            youtube: 'https://youtu.be/sMlw3HfhPoA',
            bilibili: 'https://www.bilibili.com/video/BV1CU4y1x7Hm',
        },
        tag: ['mod'],
        release: 1610249416000,
    },

    {
        name: {
            zh: '百万分！巴黎戴高乐着陆挑战',
        },
        des: {
            zh: '模拟更新（Sim Update）第二弹在12月23日正式上线，除了带来了备受期待的VR功能外，还有针对空客、波音客机的大量更新，以及全新的雪景表现。不过我们今天的视频中要讲的都不是这些，而是本次更新带来的全新着陆挑战——巴黎夏尔·戴高乐机场A320着陆挑战。',
        },
        thumbnailOriginal: './thumbnails/20201229.jpg',
        link: {
            youtube: 'https://youtu.be/lXeULVaPRLM',
            bilibili: 'https://www.bilibili.com/video/BV12f4y1e7Nt',
        },
        tag: ['test', 'landing'],
        release: 1609210057000,
    },

    {
        name: {
            zh: '云游美国',
        },
        des: {
            zh: '世界更新第二弹在11月24日如期而至，对美国全境的机场、地貌、地景、地标建筑进行了大幅更新。请大家系好安全带，搭乘 DBH 航空的班机游览北美风光~',
        },
        thumbnailOriginal: './thumbnails/20201206.jpg',
        link: {
            youtube: 'https://youtu.be/wSOc5o-xCeQ',
            bilibili: 'https://www.bilibili.com/video/BV1YZ4y1g7sR',
        },
        tag: ['flight', 'tour'],
        release: 1607229007000,
    },

    {
        name: {
            zh: '零能见度盲降',
        },
        des: {
            zh: '在全新的《微软模拟飞行》中，空客A320能否在杰克逊·霍尔机场实现零能见度盲降？我们来亲自测试下……',
        },
        thumbnailOriginal: './thumbnails/20201124.jpg',
        link: {
            youtube: 'https://youtu.be/9JJhlXSBsbo',
            bilibili: 'https://www.bilibili.com/video/BV1Ey4y1S7V6',
        },
        tag: ['clip', 'landing'],
        release: 1606188616000,
    },

    {
        name: {
            zh: '百万分！杰克逊机场着陆挑战',
        },
        des: {
            zh: '11月10日的更新为游戏带来了一个全新的着陆挑战：杰克逊·霍尔机场（Jackson Hole）。本次挑战将会驾驶 Citation CJ4 着陆在 19 跑道。CJ4 我的驾驶经验不多，祝我走运。',
        },
        thumbnailOriginal: './thumbnails/20201116.jpg',
        link: {
            youtube: 'https://youtu.be/StOJ9HkXccY',
            bilibili: 'https://www.bilibili.com/video/BV1gD4y1X7Ng',
        },
        tag: ['test', 'landing'],
        release: 1605497402000,
    },

    {
        name: {
            zh: '生涯模式 NeoFly',
        },
        des: {
            zh: '一款免费的第三方程序为《微软模拟飞行》带来了生涯模式，我们来一探究竟',
        },
        thumbnailOriginal: './thumbnails/20201108.jpg',
        link: {
            youtube: 'https://youtu.be/QElg8lr15tU',
            bilibili: 'https://www.bilibili.com/video/BV1ir4y1w7aj',
        },
        tag: ['mod'],
        release: 1604808000000,
    },

    {
        name: {
            zh: '万圣节着陆挑战',
        },
        des: {
            zh: '10月29日的更新新增了一个万圣节主题的限定着陆挑战——好吓人啊~',
        },
        thumbnailOriginal: './thumbnails/20201101.jpg',
        link: {
            youtube: 'https://youtu.be/6qPRsCuPMUE',
            bilibili: 'https://www.bilibili.com/video/BV1KD4y1R7UT',
        },
        tag: ['test', 'landing'],
        release: 1604201460000,
    },

    {
        name: {
            zh: '攀枝花保安营着陆挑战',
        },
        des: {
            zh: '就在前不久的10月16日，攀枝花保安营机场发生了一起事故，虽然没有人员伤亡，但此次事故让这座机场再次进入公众视野。通过模拟飞行，我们可以还原当时的条件，来亲自体验下在这座机场着陆是不是如传说那般具有挑战性！',
        },
        thumbnailOriginal: './thumbnails/20201025.jpg',
        link: {
            youtube: 'https://youtu.be/YxrXO9g-JLc',
            bilibili: 'https://www.bilibili.com/video/BV1tz4y1C78e',
        },
        tag: ['landing', 'airport'],
        release: 1603596631000,
    },

    {
        name: {
            zh: '新摇杆开箱 & 上手体验',
        },
        des: {
            zh: '大波胡购入了一款新的游戏外设，意图提升模拟飞行体验……',
        },
        thumbnailOriginal: './thumbnails/20201019.jpg',
        link: {
            youtube: 'https://youtu.be/XT9FdreY9ZQ',
            bilibili: 'https://www.bilibili.com/video/BV1x54y1R7nX',
        },
        tag: ['training', 'device', 'tour'],
        release: 1603078204000,
    },

    {
        name: {
            zh: '新 · 东京',
        },
        des: {
            zh: '9月29日的世界更新（日本）为东京带来了测绘级的地景。但大波胡之前一直没有在游戏中看到，直到现在……',
        },
        thumbnailOriginal: './thumbnails/20201008.jpg',
        link: {
            youtube: 'https://youtu.be/rndn4CINMQc',
            bilibili: 'https://www.bilibili.com/video/BV1m54y117rt',
        },
        tag: ['flight', 'tour'],
        release: 1602127832000,
    },

    {
        name: {
            zh: '云游日本',
        },
        des: {
            zh: '9月29日大型补丁更新 - World Update: Japan，大规模更新了日本的地貌、地景以及机场，同时带来了一个新的活动：云游日本',
        },
        thumbnailOriginal: './thumbnails/20201001.jpg',
        link: {
            youtube: 'https://youtu.be/vNcbK0hF8mg',
            bilibili: 'https://www.bilibili.com/video/BV13p4y1Y7wS',
        },
        tag: ['flight', 'tour'],
        release: 1601546435000,
    },

    {
        name: {
            zh: 'ILS 盲降',
        },
        des: {
            zh: 'ILS 盲降练习 - 降落首都国际机场',
        },
        thumbnailOriginal: './thumbnails/20200926.jpg',
        link: {
            youtube: 'https://youtu.be/F-jVs38ab8Y',
            bilibili: 'https://www.bilibili.com/video/BV1kK4y1874X',
        },
        tag: ['test', 'landing'],
        release: 1601092856000,
    },

    {
        name: {
            zh: '海河水上降落',
        },
        des: {
            zh: '驾驶 Icon A5 游览海河',
        },
        thumbnailOriginal: './thumbnails/20200920.jpg',
        link: {
            youtube: 'https://youtu.be/3Efm9u7TAyg',
            bilibili: 'https://www.bilibili.com/video/BV1yD4y1o7jE',
        },
        tag: ['test', 'tour', 'landing'],
        release: 1600659015000,
    },

    {
        name: {
            zh: '飞行训练',
        },
        des: {
            zh: '飞行训练最后一课',
        },
        thumbnailOriginal: './thumbnails/20200913.jpg',
        link: {
            youtube: 'https://youtu.be/eO0Prwjklkg',
            bilibili: 'https://www.bilibili.com/video/BV17a4y1j7Qq',
        },
        tag: ['test'],
        release: 1600056009000,
    },
];

export default videos;

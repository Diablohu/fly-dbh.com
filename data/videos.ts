import { VideoItem } from '@types';

const videos: VideoItem[] = [
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
        tag: ['landing'],
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
        tag: ['landing'],
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
        tag: ['flight', 'landing'],
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
        tag: ['landing'],
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
        tag: ['tour'],
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
        tag: ['landing'],
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
        tag: ['news'],
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
        tag: ['flight'],
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
        tag: ['flight'],
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
        tag: ['news'],
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
        tag: ['news'],
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
        tag: ['news'],
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
        tag: ['device'],
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
        tag: ['landing'],
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
        tag: ['landing'],
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
        tag: ['landing'],
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
        tag: ['landing'],
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
        tag: ['landing'],
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
        tag: ['landing'],
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
        tag: ['device'],
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
        tag: ['landing'],
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
        tag: ['tour'],
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
        tag: ['landing'],
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
        tag: ['landing'],
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
        tag: ['device', 'tour'],
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
        tag: ['tour'],
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
        tag: ['tour'],
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
        tag: ['landing'],
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
        tag: ['tour', 'landing'],
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
        tag: ['training'],
        release: 1600056009000,
    },
];

export default videos;

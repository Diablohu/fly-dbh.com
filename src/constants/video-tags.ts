import { VideoTag } from '@types';

const tags: Array<VideoTag> = [
    'news',
    'training',
    'flight',
    'airport',
    'route',

    'tip',
    'benchmark',
    'test',
    'clip',

    'landing',
    'tour',
    'mod',
    'device',
];

export default tags;

export const names: {
    [key in VideoTag]: string;
} = {
    news: '模飞新闻',
    training: '教程攻略',
    flight: '模飞剪辑',
    airport: '专题：机场',
    route: '专题：航线',

    tip: '小窍门',
    benchmark: '评测',
    test: '游戏实况',
    clip: '片段',

    landing: '着陆',
    device: '设备',
    mod: 'MOD/插件',
    tour: '景观',
};

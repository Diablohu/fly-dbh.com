import { VideoTag } from '@types';

const tags: Array<VideoTag> = [
    'news',
    'training',
    'flight',
    'airport',
    'route',

    'tip',
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
    training: '综合/教程',
    flight: '模飞短片',
    airport: '专题：机场',
    route: '专题：航线',

    tip: '小窍门',
    test: '试飞',
    clip: '片段',

    landing: '着陆',
    device: '设备',
    mod: 'MOD/插件',
    tour: '景观',
};

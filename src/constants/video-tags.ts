import { VideoTag } from '@types';

const tags: Array<VideoTag> = [
    'news',
    'airport',
    'route',
    'training',
    'flight',
    'landing',
    'tour',
    'mod',
    'device',
    'clip',
];

export default tags;

export const names: {
    [key in VideoTag]: string;
} = {
    clip: '片段',
    training: '综合/教程',
    landing: '着陆',
    airport: '专题：机场',
    route: '专题：航线',
    device: '设备',
    mod: 'MOD/插件',
    tour: '景观',
    news: '游戏资讯',
    flight: '飞行',
};

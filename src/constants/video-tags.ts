import { VideoTag } from '@types';

export const listWithSeperator: Array<VideoTag | ''> = [
    'news',
    'training',
    'flight',
    'test',
    'benchmark',
    'world',
    // 'airport',
    // 'route',

    '',

    'tip',
    'clip',
    'chat',
    'landing',
    'tour',
    'mod',
    'device',
];

const tags = listWithSeperator.filter((t) => t !== '') as Array<VideoTag>;
export default tags;

export const names: {
    [key in VideoTag]: string;
} = {
    news: '新鲜事',
    training: '教程攻略',
    flight: '模飞剪辑',
    test: '游戏实况',
    benchmark: '评测',
    world: '飞行世界',
    // airport: '专题：机场',
    // route: '专题：航线',

    tip: '小窍门',
    clip: '欢乐',
    chat: '闲谈',
    landing: '着陆',
    tour: '景观',
    mod: 'MOD/插件',
    device: '设备',
};

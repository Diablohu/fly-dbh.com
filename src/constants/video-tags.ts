import { VideoTag } from '@types';

const tags: Array<VideoTag> = [
    'landing',
    'airport',
    'route',
    'tour',
    'device',
    'mod',
    'training',
    'clip',
];

export default tags;

export const names: {
    [key in VideoTag]: string;
} = {
    clip: '片段',
    training: '训练',
    landing: '着陆',
    airport: '机场',
    route: '航线',
    device: '设备',
    mod: 'MOD/插件',
    tour: '景观',
};

import { VideoTag } from '@types';

const tags: Array<VideoTag> = [
    'clip',
    'training',
    'landing',
    'airport',
    'device',
    'mod',
    'tour',
];

export default tags;

export const names: {
    [key in VideoTag]: string;
} = {
    clip: '片段',
    training: '训练',
    landing: '降落',
    airport: '机场',
    device: '设备',
    mod: 'MOD/插件',
    tour: '云游',
};

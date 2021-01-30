import { VideoSource } from '@types';

const sources: Array<VideoSource> = ['bilibili', 'youtube'];

export default sources;

export const names: {
    [key in VideoSource]: string;
} = {
    bilibili: '哔哩哔哩',
    youtube: 'YouTube',
};

import { StaticImageData } from 'next/image';
import { ComponentType } from 'react';

export interface IProjectEntity {
    title: string;
    isOpenSource?: boolean
    image: StaticImageData;
    description: string;
    technologies: string;
    sourceCode?: string;
    url: string;
}

export interface ITechnologyEntity {
    label: string;
    Icon: ComponentType;
    description: string
}

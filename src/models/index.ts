import { StaticImageData } from 'next/image';
import { ComponentType } from 'react';

export interface IProjectEntity {
    title: string;
    image: StaticImageData;
    description: string;
    technologies: string;
    sourceCode: string;
    demoUrl: string;
}

export interface ITechnologyEntity {
    label: string;
    Icon: ComponentType;
    description: string
}

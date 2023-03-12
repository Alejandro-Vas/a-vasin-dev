import { StaticImageData } from 'next/image';

export interface IProjectEntity {
    title: string;
    image: StaticImageData;
    description: string;
    technologies: string;
    sourceCode: string;
    demoUrl: string;
}

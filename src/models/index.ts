import { StaticImageData } from 'next/image';
import {
  ComponentType, Dispatch, SetStateAction,
} from 'react';

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

export type IModalContext = {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>> | (() => void);
    fullscreenImage: StaticImageData | null
    setFullscreenImage: Dispatch<SetStateAction<StaticImageData>> | (() => void) ;
};

import { createContext } from 'react';
import { IModalContext } from '@models/index';

export const ModalContext = createContext<IModalContext>({
  isModalOpen: false,
  setIsModalOpen: () => null,
  fullscreenImage: {
    src: '',
    height: 0,
    width: 0,
  },
  setFullscreenImage: () => null,
});

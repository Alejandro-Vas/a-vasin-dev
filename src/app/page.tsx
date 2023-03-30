'use client';

import About from '@components/About';
import Experience from '@components/Experience';
import Projects from '@components/Projects';
import Technologies from '@components/Technologies';

import { ANCHORS } from '@constants/index';

import { COMMERCIAL_PROJECTS, OPEN_SOURCE_PROJECTS } from '@constants/projects';

import MotionWrapper from '@components/MotionWrapper';
import { useState, useMemo, useCallback } from 'react';
import { ModalContext } from '@contexts/index';
import { StaticImageData } from 'next/image';
import Modal from '@components/Modal';
import styles from './styles.module.scss';

const emptyImage = {
  src: '',
  height: 0,
  width: 0,
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<
    StaticImageData | typeof emptyImage
    >(emptyImage);

  const value = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen,
      fullscreenImage,
      setFullscreenImage,
    }),
    [fullscreenImage, isModalOpen],
  );

  const onClose = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  return (
    <ModalContext.Provider value={value}>
      <main className="container" id={ANCHORS.TOP}>
        {isModalOpen && (
          <Modal onClose={onClose} image={fullscreenImage} />
        )}

        <div className={styles.contentWrapper}>
          <About />

          <MotionWrapper>
            <Technologies />
          </MotionWrapper>

          <MotionWrapper>
            <Experience />
          </MotionWrapper>

          <MotionWrapper delay={2}>
            <Projects
              type="COMMERCIAL PROJECTS"
              anchor={ANCHORS.PROJECTS}
              projects={COMMERCIAL_PROJECTS}
            />
          </MotionWrapper>

          <MotionWrapper delay={3}>
            <Projects
              type="OPEN SOURCE PROJECTS"
              projects={OPEN_SOURCE_PROJECTS}
            />
          </MotionWrapper>
        </div>
      </main>
    </ModalContext.Provider>
  );
}

export default App;

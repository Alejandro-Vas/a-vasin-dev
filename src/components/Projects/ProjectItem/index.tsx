'use client';

import Button from '@components/Button';
import GitHubIcon from '@assets/icons/technologies/github.svg';
import GitLabIcon from '@assets/icons/technologies/gitlab.svg';
import Image from 'next/image';
import { IProjectEntity } from '@models/index';
import { memo, useContext } from 'react';
import { ModalContext } from '@contexts/index';
import styles from './styles.module.scss';

export interface IProject {
    project: IProjectEntity
}

function ProjectItem({ project }: IProject) {
  const { setIsModalOpen, setFullscreenImage } = useContext(ModalContext);

  const {
    title, url, sourceCode, technologies, image, isOpenSource,
  } = project;

  const onOpen = () => {
    if (!image) return;

    setIsModalOpen(true);
    setFullscreenImage(image);
  };

  return (
    <div className={styles.container} key={title}>
      <div className={styles.text}>
        <div className={styles.links}>
          <h2>
            {title}
          </h2>

          <div className={styles.icon}>
            {isOpenSource ? <GitHubIcon /> : <GitLabIcon />}
          </div>
        </div>

        <div>
          {technologies}
        </div>

        <div className={styles.links}>
          <Button>
            <a href={url} target="_blank" rel="noreferrer">
              OPEN
            </a>
          </Button>

          {isOpenSource && (
            <Button>
              <a href={sourceCode} target="_blank" rel="noreferrer">
                CODE
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          onClick={onOpen}
          src={image}
          alt="Project preview"
          className={styles.image}
          placeholder="blur"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}

export default memo(ProjectItem);

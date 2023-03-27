'use client';

import Button from '@components/Button';
import GithubIcon from '@assets/icons/technologies/github.svg';
import GitLabIcon from '@assets/icons/technologies/gitlab.svg';
import Image from 'next/image';
import { IProjectEntity } from '@models/index';
import { useCallback, useState } from 'react';
import Modal from '@components/Modal';
import styles from './styles.module.scss';

export interface IProject {
    project: IProjectEntity
}

function ProjectItem({ project }: IProject) {
  // TODO modal state to global (useContext, redux, etc)
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const {
    title, url, sourceCode, technologies, image, isOpenSource,
  } = project;

  return (
    <>

      {isOpen && (
        <Modal onClose={onClose} image={image} />
      )}

      <div className={styles.container} key={title}>
        <div className={styles.text}>
          <div className={styles.links}>
            <h2>
              {title}
            </h2>

            <div className={styles.icon}>
              {isOpenSource ? <GithubIcon /> : <GitLabIcon />}
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
            onClick={() => setIsOpen(true)}
            src={image}
            alt="Project preview"
            className={styles.image}
            placeholder="blur"
            width={0}
            height={0}
          />
        </div>
      </div>
    </>
  );
}

export default ProjectItem;

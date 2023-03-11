'use client';

import Button from '@components/Button';
import GithubIcon from '@assets/icons/technologies/github.svg';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';

interface IProject {
    project: {
        title: string;
        image: StaticImageData;
        description: string;
        technologies: string;
        sourceCode: string;
        demoUrl: string;
    }
}

function ProjectItem({ project }: IProject) {
  const {
    title, demoUrl, sourceCode, technologies, image,
  } = project;

  return (
    <div className={styles.container} key={title}>
      <div className={styles.text}>
        <div>
          <h2>
            {title}
          </h2>
        </div>

        <div>
          {technologies}
        </div>

        <div className={styles.links}>
          <Button>
            <a href={demoUrl} target="_blank" rel="noreferrer">
              DEMO
            </a>
          </Button>

          <div className={styles.githubIcon}>
            <a href={sourceCode} target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>

      <Image
        src={image}
        alt="Project preview"
        height={300}
        placeholder="blur"
      />
    </div>
  );
}

export default ProjectItem;
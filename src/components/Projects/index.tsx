'use client';

import { ANCHORS } from '@constants/index';
import Carousel from 'nuka-carousel';
import Experience from '@components/Experience';
import Button from '@components/Button';

import GithubIcon from '@assets/icons/technologies/github.svg';

import styles from './styles.module.scss';

const projects = [
  {
    title: 'NEWS APP',
    image: '',
    description: 'new ',
    technologies: 'JavaScript, TypeScript, React, Redux, Material UI',
    sourceCode: 'https://github.com/Alejandro-Vas/news-app',
    demoUrl: 'https://lighthearted-custard-5024f1.netlify.app',
  },
];

function Projects() {
  return (
    <div>
      <span id={ANCHORS.PROJECTS} />
      <h2 className="textAlignCenter">
        PROJECTS
      </h2>

      <div className="paper">
        <Carousel
          defaultControlsConfig={{ prevButtonText: '<', nextButtonText: '>' }}
        >
          {projects.map(({
            title, demoUrl, sourceCode, technologies,
          }) => (
            <>
              <div key={title}>
                <h2>
                  {title}
                </h2>
              </div>

              <div>
                {technologies}
              </div>

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

            </>
          ))}
          <Experience />
          <Experience />
        </Carousel>
      </div>
    </div>
  );
}
export default Projects;

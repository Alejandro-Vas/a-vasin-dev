'use client';

import { ANCHORS } from '@constants/index';
import Carousel from 'nuka-carousel';
import Button from '@components/Button';

import GithubIcon from '@assets/icons/technologies/github.svg';
import newsApp from '@assets/images/projects/newsApp.png';
import personalSite from '@assets/images/projects/personalSite.png';
import jsonViewer from '@assets/images/projects/jsonViewer.png';
import Image from 'next/image';
import styles from './styles.module.scss';
import Accordion from '../Accordion/index';

const projects = [
  {
    title: 'NEWS APP',
    image: newsApp,
    description: '',
    technologies: 'JavaScript, TypeScript, React, Redux, Material UI',
    sourceCode: 'https://github.com/Alejandro-Vas/news-app',
    demoUrl: 'https://lighthearted-custard-5024f1.netlify.app',
  },
  {
    title: 'PERSONAL SITE',
    image: personalSite,
    description: '',
    technologies: 'JavaScript, TypeScript, React, NextJS, SCSS',
    sourceCode: 'https://github.com/Alejandro-Vas/a-vasin-dev',
    demoUrl: 'https://unique-monstera-ba326c.netlify.app',
  },
  {
    title: 'JSON VIEWER (NPM PACKAGE)',
    image: jsonViewer,
    description: '',
    technologies: 'JavaScript, TypeScript, React',
    sourceCode: 'https://github.com/Alejandro-Vas/JSON-viewer',
    demoUrl: 'https://jade-hamster-a6833c.netlify.app/',
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
        <Accordion />
        {/* <Carousel
          defaultControlsConfig={{
            prevButtonText: '<',
            nextButtonText: '>',
            pagingDotsStyle: {
              padding: '4px',
            },
          }}
        >
          {projects.map(({
            title, demoUrl, sourceCode, technologies, image,
          }) => (
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
          ))}
        </Carousel> */}
      </div>
    </div>
  );
}
export default Projects;

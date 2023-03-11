'use client';

import { ANCHORS } from '@constants/index';

import newsApp from '@assets/images/projects/newsApp.png';
import personalSite from '@assets/images/projects/personalSite.png';
import jsonViewer from '@assets/images/projects/jsonViewer.png';

import Accordion from '../Accordion/index';
import ProjectItem from './ProjectItem/index';

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

        {projects.map((project) => (
          <ProjectItem project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
export default Projects;

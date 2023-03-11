'use client';

import { ANCHORS, PROJECTS } from '@constants/index';
import Accordion from '../Accordion/index';
import ProjectItem from './ProjectItem/index';

function Projects() {
  return (
    <div>
      <span id={ANCHORS.PROJECTS} />
      <h2 className="textAlignCenter">
        PROJECTS
      </h2>

      <div className="paper">
        <Accordion />

        {PROJECTS.map((project) => (
          <ProjectItem project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
export default Projects;

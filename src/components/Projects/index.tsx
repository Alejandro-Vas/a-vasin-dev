'use client';

import { IProjectEntity } from '@models/index';
import Accordion from '@components/Accordion/index';

interface IProjects {
  type: string
  anchor?: string
  projects: IProjectEntity[]
}

function Projects({ type, anchor, projects }:IProjects) {
  return (
    <div>
      {anchor && <span id={anchor} />}

      <h2 className="textAlignCenter">
        {type}
      </h2>

      <div className="paper">
        <Accordion projects={projects} />
      </div>
    </div>
  );
}
export default Projects;

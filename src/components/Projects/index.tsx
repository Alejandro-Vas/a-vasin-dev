'use client';

import Accordion from '../Accordion/index';

interface IProjects {
  type: string
  anchor?: string
}

function Projects({ type, anchor }:IProjects) {
  return (
    <div>
      {anchor && <span id={anchor} />}

      <h2 className="textAlignCenter">
        {type}
      </h2>

      <div className="paper">
        <Accordion />
      </div>
    </div>
  );
}
export default Projects;

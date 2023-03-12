'use client';

import { ANCHORS } from '@constants/index';
import Accordion from '../Accordion/index';

function Projects() {
  return (
    <div>
      <span id={ANCHORS.PROJECTS} />
      <h2 className="textAlignCenter">
        PROJECTS
      </h2>

      <div className="paper">
        <Accordion />
      </div>
    </div>
  );
}
export default Projects;

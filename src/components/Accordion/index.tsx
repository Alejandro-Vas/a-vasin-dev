import { useState } from 'react';
import PROJECTS from '@constants/projects';
import AccordionItem from './AccordionItem';

import styles from './styles.module.scss';

function Accordion() {
  const [clicked, setClicked] = useState<string | null>(null);

  const handleToggle = (title:string) => {
    if (clicked === title) {
      return setClicked(null);
    }
    return setClicked(title);
  };

  return (
    <ul className={styles.accordion}>
      {PROJECTS.map((project) => (
        <AccordionItem
          onToggle={() => handleToggle(project.title)}
          active={clicked === project.title}
          key={project.title}
          project={project}
        />
      ))}
    </ul>
  );
}

export default Accordion;

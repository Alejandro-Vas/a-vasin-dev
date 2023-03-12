import { useState, useCallback } from 'react';
import PROJECTS from '@constants/projects';
import AccordionItem from './AccordionItem';

import styles from './styles.module.scss';

function Accordion() {
  const [clicked, setClicked] = useState<string | null>(null);

  const onToggle = useCallback((title:string) => {
    if (clicked === title) {
      return setClicked(null);
    }
    return setClicked(title);
  }, [clicked]);

  return (
    <ul className={styles.accordion}>
      {PROJECTS.map((project) => (
        <AccordionItem
          onToggle={onToggle}
          active={clicked === project.title}
          key={project.title}
          project={project}
        />
      ))}
    </ul>
  );
}

export default Accordion;

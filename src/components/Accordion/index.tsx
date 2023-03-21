import { useState, useCallback } from 'react';
import { IProjectEntity } from '@models/index';
import AccordionItem from './AccordionItem';

import styles from './styles.module.scss';

interface IAccordion {
 projects: IProjectEntity[];
}

function Accordion({ projects }:IAccordion) {
  const [clicked, setClicked] = useState<string | null>(null);

  const onToggle = useCallback(
    (title:string) => (
      clicked === title
        ? setClicked(null)
        : setClicked(title)),
    [clicked],
  );

  return (
    <ul className={styles.accordion}>
      {projects.map((project) => (
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

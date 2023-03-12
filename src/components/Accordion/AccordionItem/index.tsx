import ProjectItem from '@components/Projects/ProjectItem';
import { useRef } from 'react';
import { IProjectEntity } from '@models/index';
import styles from '../styles.module.scss';

interface IAccordionItem {
  onToggle: () => void;
  active: boolean;
  project:IProjectEntity;
}

function AccordionItem({ project, active, onToggle }: IAccordionItem) {
  const contentEl = useRef<HTMLDivElement | null>(null);

  return (
    <li className={`${styles.accordionItem} ${active ? styles.active : ''}`}>
      <button type="button" className={styles.button} onClick={onToggle}>
        {project.title}

        <span className={styles.control}>
          {active ? '—' : '+'}

          {' '}
        </span>
      </button>

      <div
        ref={contentEl}
        className={styles.answerWrapper}
        style={
          active
            ? { height: contentEl.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className={styles.answer}>
          <ProjectItem project={project} />
        </div>
      </div>
    </li>
  );
}

export default AccordionItem;

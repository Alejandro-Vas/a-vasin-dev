import ProjectItem from '@components/Projects/ProjectItem';
import { memo, useRef } from 'react';
import { IProjectEntity } from '@models/index';
import MinusIcon from '@assets/icons/ui/minus.svg';
import PlusIcon from '@assets/icons/ui/plus.svg';
import styles from '../styles.module.scss';

interface IAccordionItem {
  onToggle: (arg: string) => void | typeof arg
  active: boolean;
  project: IProjectEntity;
}

function AccordionItem({ project, active, onToggle }: IAccordionItem) {
  const contentEl = useRef<HTMLDivElement | null>(null);

  return (
    <li className={`${styles.accordionItem} ${active ? styles.active : ''}`}>
      <button
        type="button"
        className={styles.button}
        onClick={() => onToggle(project.title)}
      >
        {project.title}

        {active ? <MinusIcon /> : <PlusIcon />}
      </button>

      <div
        ref={contentEl}
        className={styles.contentWrapper}
        style={
          active
            ? { height: contentEl.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className={styles.content}>
          <ProjectItem project={project} />
        </div>
      </div>
    </li>
  );
}

export default memo(AccordionItem);

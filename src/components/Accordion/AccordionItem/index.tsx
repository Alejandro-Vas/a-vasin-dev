import { useRef } from 'react';

import styles from '../styles.module.scss';

function AccordionItem({ faq, active, onToggle }) {
  const { question, answer } = faq;

  const contentEl = useRef<HTMLDivElement | null>(null);

  return (
    <li className={`${styles.accordionItem} ${active ? styles.active : ''}`}>
      <button type="button" className={styles.button} onClick={onToggle}>
        {question}

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
          {answer}
        </div>
      </div>
    </li>
  );
}

export default AccordionItem;

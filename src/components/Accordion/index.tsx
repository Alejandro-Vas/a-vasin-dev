import { useState } from 'react';
import { faqs } from './data';
import AccordionItem from './AccordionItem';

import styles from './styles.module.scss';

function Accordion() {
  const [clicked, setClicked] = useState<number | null>(null);

  const handleToggle = (index:number) => {
    if (clicked === index) {
      return setClicked(null);
    }
    return setClicked(index);
  };

  return (
    <ul className={styles.accordion}>
      {faqs.map((faq, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          faq={faq}
        />
      ))}
    </ul>
  );
}

export default Accordion;

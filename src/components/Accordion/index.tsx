import { useState } from 'react';
import { faqs } from './data';
import AccordionItem from './AccordionItem';

function Accordion() {
  const [clicked, setClicked] = useState(0);

  const handleToggle = (index:number) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
    return null;
  };

  return (
    <ul className="accordion">
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

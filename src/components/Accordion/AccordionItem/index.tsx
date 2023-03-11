import { useRef } from 'react';

function AccordionItem({ faq, active, onToggle }) {
  const { question, answer } = faq;

  const contentEl = useRef<any>(null);

  return (
    <li className={`accordion_item ${active ? 'active' : ''}`}>
      <button type="button" className="button" onClick={onToggle}>
        {question}
        <span className="control">
          {active ? '—' : '+'}
          {' '}
        </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
}

export default AccordionItem;

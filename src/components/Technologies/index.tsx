'use client';

import { useState } from 'react';
import { ANCHORS } from '@constants/index';
import technologiesList from '../../constants/technologiesList';
import styles from './styles.module.scss';

const initState = technologiesList[4];

function Technologies() {
  const [active, setActive] = useState({
    label: initState.label,
    description: initState.description,
  });

  const onSelect = (selected: { label :string, description: string }) => {
    setActive(selected);
  };

  return (
    <div>
      <span id={ANCHORS.TECHNOLOGIES} />
      <h2 className="textAlignCenter">
        TECHNOLOGIES
      </h2>
      <div className="paper">
        <div className={styles.technologyList}>
          {technologiesList.map(({ label, Icon, description = 'No description' }) => {
            const isActiveSelected = active.label === label;
            const selectedClassName = isActiveSelected ? styles.selected : '';
            return (
              <div
                key={label}
                className={`${styles.technologyItem} ${selectedClassName}`}
                onClick={() => onSelect({ label, description })}
                tabIndex={-1}
                role="button"
                onKeyDown={() => null}
              >
                <Icon />
              </div>
            );
          })}
        </div>

        <div className={styles.label}>
          <h2>
            {active.label}
          </h2>
        </div>

        <div className={styles.description}>
          {active.description}
        </div>

      </div>
    </div>
  );
}

export default Technologies;

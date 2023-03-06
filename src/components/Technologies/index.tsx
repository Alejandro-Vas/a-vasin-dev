'use client';

import Image from 'next/image';
import { useState } from 'react';
import technologiesList from './technologiesList';

import styles from './page.module.scss';

function Technologies() {
  const [active, setActive] = useState({ label: 'Technology list', description: '' });

  const onSelect = (selected: { label :string, description: string }) => {
    setActive(selected);
  };

  return (
    <div>
      <h2>
        TECHNOLOGIES
      </h2>
      <div className={styles.background}>
        <div className={styles.technologyList}>
          {technologiesList.map(({ label, icon, description = 'No description' }) => {
            const isActiveSelected = active.label === label;
            const selectedClassName = isActiveSelected ? styles.selected : '';
            return (
              <Image
                src={icon}
                width="60"
                height="60"
                alt={label}
                key={label}
                className={`${styles.technologyItem} ${selectedClassName}`}
                onClick={() => onSelect({ label, description })}
              />
            );
          })}
        </div>

        <div className={styles.label}>
          <h2>
            {active.label}
          </h2>
        </div>

        <div className={styles.description}>
          <div>
            {active.description}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Technologies;

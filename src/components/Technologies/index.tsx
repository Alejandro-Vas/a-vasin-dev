'use client';

import Image from 'next/image';
import { useState } from 'react';
import technologyList from './technologyList';

import styles from './page.module.scss';

function Technologies() {
  const [activeLabel, setActiveLabel] = useState('Technology list');
  const [avtiveDescription, setActiveDescription] = useState('Select technology above to explore');

  const onSelect = ({ label, description }: { label :string, description: string }) => {
    setActiveLabel(label);
    setActiveDescription(description);
  };

  return (
    <div className={styles.background}>
      <div className={styles.technologyList}>
        {technologyList.map(({ label, icon, description = 'No description' }) => (
          <Image
            src={icon}
            width="80"
            height="80"
            alt={label}
            key={label}
            className={styles.technologyItem}
            onClick={() => onSelect({ label, description })}
          />
        ))}
      </div>

      <div className={styles.label}>
        <h2>
          {activeLabel}
        </h2>
      </div>

      <div className={styles.description}>
        <h3>
          {avtiveDescription}
        </h3>
      </div>

    </div>
  );
}

export default Technologies;

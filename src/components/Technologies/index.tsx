'use client';

import { useState } from 'react';
import { TECHNOLOGY_LIST, ANCHORS } from '@constants/index';
import styles from './styles.module.scss';
import TechnologyItem from './TechnologyItem';

const initState = TECHNOLOGY_LIST[4];

function Technologies() {
  const [active, setActive] = useState(initState);

  return (
    <div>
      <span id={ANCHORS.TECHNOLOGIES} />

      <h2 className="textAlignCenter">
        TECHNOLOGIES
      </h2>

      <div className="paper">
        <div className={styles.technologyList}>
          {TECHNOLOGY_LIST.map((technology) => {
            const isActiveSelected = active.label === technology.label;

            return (
              <TechnologyItem
                technology={technology}
                isActiveSelected={isActiveSelected}
                key={technology.label}
                setActive={setActive}
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
          {active.description || 'No description'}
        </div>

      </div>
    </div>
  );
}

export default Technologies;

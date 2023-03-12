import { ANCHORS, EMPLOYERS } from '@constants/index';

import styles from './styles.module.scss';

function Experience() {
  return (
    <div>
      <span id={ANCHORS.EXPERIENCE} />
      <div>
        <h2 className="textAlignCenter">
          EXPERIENCE
        </h2>

        <div className="paper">
          <div className={styles.employersContainer}>
            {EMPLOYERS.map(({
              title, Icon, responsibilities, dateFrom, dateTo, position,
            }) => (
              <div className={styles.employer} key={title}>
                <div className={styles.leftBlock}>
                  <div>
                    {dateFrom}
                    {' '}
                    -
                    {' '}
                    {dateTo}
                  </div>

                  <div>
                    <Icon />
                  </div>

                  <div>
                    <h3>{position}</h3>
                  </div>
                </div>

                <div className={styles.rightBlock}>
                  <div className={styles.responsibilityList}>
                    {responsibilities.map((responsibility) => (
                      <li key={responsibility}>
                        {responsibility}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;

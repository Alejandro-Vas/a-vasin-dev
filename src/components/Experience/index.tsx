import { ANCHORS } from '@constants/index';
import norvik from '@assets/icons/experience/norvik.svg';
import carprice from '@assets/icons/experience/carprice.svg';
import Link from 'next/link';
import styles from './styles.module.scss';

const employers = [
  {
    title: 'CARPRICE',
    website: 'https://carprice.ru',
    Icon: carprice,
    position: 'Frontend developer',
    responsibilities: [
      'App development using JavaScript, TypeScript, React, Redux, NextJS.',
      'UI-kit and internal packages support',
      'Discussion of API implementation with backend developers',
      'Code-Review',
      'Performance optimization',
      'Refactoring',
      'Deploy configuration',
    ],
    dateFrom: 'March 2022',
    dateTo: 'Until now',
  },
  {
    title: 'NORVIK BANK',
    website: 'https://norvikbank.ru',
    Icon: norvik,
    position: 'Balance and credit property asset appraiser',
    responsibilities: [
      'Property valuation for lending purposes',
      'Analytics and calculation of the value of the bank\'s balance sheet assets',
    ],
    dateFrom: 'July 2010',
    dateTo: 'March 2022',
  },
];

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
            {employers.map(({
              title, website, Icon, responsibilities, dateFrom, dateTo, position,
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
                    <Link href={website} className={styles.icon} target="_blank">
                      <Icon />
                    </Link>
                  </div>

                  <div>
                    <h3>{position}</h3>
                  </div>
                </div>

                <div className={styles.rightBlock}>

                  <div>
                    <div className={styles.responsibilityList}>
                      {responsibilities.map((responsibility) => (
                        <li key={responsibility}>
                          {responsibility}
                        </li>
                      ))}
                    </div>
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

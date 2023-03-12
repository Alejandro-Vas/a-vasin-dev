import { SOCIAL_LINKS } from '@constants/index';
import styles from './styles.module.scss';

function About() {
  return (
    <div className={styles.mainInfo}>
      <div>
        <h1> Aleksandr Vasin</h1>
        <h2>Frontend developer</h2>
      </div>

      <div>
        <h3>
          Experience of building web applications applications since 2021
        </h3>
      </div>

      <div className={styles.links}>
        {SOCIAL_LINKS.map(({ Icon, link }) => (
          <div className={styles.linkItem} key={link}>
            <a href={link} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          </div>
        ))}

      </div>
    </div>
  );
}

export default About;

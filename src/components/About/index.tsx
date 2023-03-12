import { ANCHORS } from '@constants/index';
import styles from './styles.module.scss';

function About() {
  return (
    <div>
      <div className={styles.mainInfo} id={ANCHORS.TOP}>
        <h1> Aleksandr Vasin</h1>
        <h2>Frontend developer</h2>
      </div>
      <h3>
        Experience of building apps in product company scrum team with CI/CD applications since 2021
      </h3>
    </div>
  );
}

export default About;

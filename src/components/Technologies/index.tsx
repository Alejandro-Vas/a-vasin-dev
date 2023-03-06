import Image from 'next/image';
import technologyList from './technologyList';

import styles from './page.module.scss';

function Technologies() {
  return (
    <div className={styles.background}>
      {technologyList.map(({ label, icon }) => (
        <Image
          src={icon}
          width="100"
          height="100"
          alt={label}
          key={label}
          className={styles.technologyItem}
        />
      ))}

    </div>
  );
}

export default Technologies;

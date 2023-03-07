'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

function Header() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/#PROJECTS');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        Header!
        <div>
          <div className={styles.navContainer}>
            <li>
              <Link href="/#">Technologies</Link>
            </li>
            <li>
              <Link href="/">Experience</Link>
            </li>
            <a onClick={handleClick}>
              Projects
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

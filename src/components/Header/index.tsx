'use client';

import { Y_OFFSET, MENU_ITEMS, ANCHORS } from '@constants/index';
import Logo from '@assets/icons/logo.svg';
import styles from './styles.module.scss';

function Header() {
  const scrollSmoothTo = (elementId:string) => {
    const element = document.getElementById(elementId);

    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + Y_OFFSET;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo
          onClick={() => scrollSmoothTo(ANCHORS.TOP)}
          className={styles.icon}
        />

        <div>
          <div className={styles.navContainer}>
            {MENU_ITEMS.map(({ label, anchor }) => (
              <div
                className={styles.navItem}
                role="button"
                onClick={() => scrollSmoothTo(anchor)}
                key={label}
                tabIndex={-1}
                // TODO add keyboard listener on enter
                onKeyDown={() => null}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

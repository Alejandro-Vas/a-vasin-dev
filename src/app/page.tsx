import Image from 'next/image';
import Technologies from '@components/Technologies';
import styles from './page.module.css';
import cat from '../../public/cat.jpg';

function App() {
  return (
    <main className={styles.main}>
      <div>
        <h1>
          WELCOME
        </h1>

        <Technologies />
        <div>
          <a
            href="/"
            rel="noopener noreferrer"
          >
            <Image
              src={cat}
              alt="CAT"
              width={600}
              height={400}
              placeholder="blur"
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
    </main>
  );
}

export default App;

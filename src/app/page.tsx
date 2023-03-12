import About from '@components/About';
import Experience from '@components/Experience';
import Projects from '@components/Projects';
import Technologies from '@components/Technologies';

import { ANCHORS } from '@constants/index';

import styles from './styles.module.scss';

function App() {
  return (
    <main className="container" id={ANCHORS.TOP}>
      <div className={styles.contentWrapper}>
        <About />

        <Technologies />

        <Experience />

        <Projects />
      </div>

    </main>
  );
}

export default App;

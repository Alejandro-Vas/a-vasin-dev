import About from '@components/About';
import Experience from '@components/Experience';
import Projects from '@components/Projects';
import Technologies from '@components/Technologies';

import { ANCHORS } from '@constants/index';

import { COMMERCIAL_PROJECTS, OPEN_SOURCE_PROJECTS } from '@constants/projects';

import styles from './styles.module.scss';

function App() {
  return (
    <main className="container" id={ANCHORS.TOP}>
      <div className={styles.contentWrapper}>
        <About />

        <Technologies />

        <Experience />

        <Projects
          type="COMMERCIAL PROJECTS"
          anchor={ANCHORS.PROJECTS}
          projects={COMMERCIAL_PROJECTS}
        />

        <Projects
          type="OPEN SOURCE PROJECTS"
          projects={OPEN_SOURCE_PROJECTS}
        />
      </div>
    </main>
  );
}

export default App;

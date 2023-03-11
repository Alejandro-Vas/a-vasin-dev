import EMPLOYERS from './employers';
import TECHNOLOGIES_LIST from './technologiesList';
import PROJECTS from './projects';

const ANCHORS = {
  PROJECTS: 'PROJECTS',
  TECHNOLOGIES: 'TECHNOLOGIES',
  EXPERIENCE: 'EXPERIENCE',
};

const MENU_ITEMS = [
  {
    label: 'Technologies',
    anchor: ANCHORS.TECHNOLOGIES,
  },
  {
    label: 'Experience',
    anchor: ANCHORS.EXPERIENCE,
  },
  {
    label: 'Projects',
    anchor: ANCHORS.PROJECTS,
  },
];

const Y_OFFSET = -55;

export {
  ANCHORS,
  Y_OFFSET,
  MENU_ITEMS,
  EMPLOYERS,
  TECHNOLOGIES_LIST,
  PROJECTS,
};

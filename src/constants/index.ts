import EMPLOYERS from './employers';
import TECHNOLOGY_LIST from './technologyList';
import { OPEN_SOURCE_PROJECTS, COMMERCIAL_PROJECTS } from './projects';
import SOCIAL_LINKS from './socialLinks';

const ANCHORS = {
  TOP: 'TOP',
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
  TECHNOLOGY_LIST,
  OPEN_SOURCE_PROJECTS,
  COMMERCIAL_PROJECTS,
  SOCIAL_LINKS,
};

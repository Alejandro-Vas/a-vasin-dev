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
};

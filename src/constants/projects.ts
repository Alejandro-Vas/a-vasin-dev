import newsApp from '@assets/images/projects/newsApp.png';
import starWars from '@assets/images/projects/starWars.png';
import personalSite from '@assets/images/projects/personalSite.png';
import jsonViewer from '@assets/images/projects/jsonViewer.png';

import carpriceRu from '@assets/images/projects/carprice/carpriceRu.png';
import carpriceAuction from '@assets/images/projects/carprice/carpriceAuction.png';
import carpriceMarket from '@assets/images/projects/carprice/carpriceMarket.png';

import { IProjectEntity } from '@models/index';

export const OPEN_SOURCE_PROJECTS:IProjectEntity[] = [
  {
    title: 'NEWS APP',
    image: newsApp,
    description: '',
    technologies: 'JavaScript, TypeScript, React, Redux, Webpack, Material UI',
    sourceCode: 'https://github.com/Alejandro-Vas/news-app',
    url: 'https://lighthearted-custard-5024f1.netlify.app',
    isOpenSource: true,
  },
  {
    title: 'STAR WARS API CLIENT',
    image: starWars,
    description: '',
    technologies: 'JavaScript, TypeScript, React, Webpack, SCSS',
    sourceCode: 'https://github.com/Alejandro-Vas/star-wars',
    url: 'https://zesty-salamander-9fcecc.netlify.app/',
    isOpenSource: true,
  },
  {
    title: 'PERSONAL SITE',
    image: personalSite,
    description: '',
    technologies: 'JavaScript, TypeScript, React, NextJS, Webpack, SCSS',
    sourceCode: 'https://github.com/Alejandro-Vas/a-vasin-dev',
    url: 'https://unique-monstera-ba326c.netlify.app',
    isOpenSource: true,
  },
  {
    title: 'JSON VIEWER (NPM PACKAGE)',
    image: jsonViewer,
    description: '',
    technologies: 'JavaScript, TypeScript, React, Webpack',
    sourceCode: 'https://github.com/Alejandro-Vas/JSON-viewer',
    url: 'https://jade-hamster-a6833c.netlify.app/',
    isOpenSource: true,
  },
];

export const COMMERCIAL_PROJECTS:IProjectEntity[] = [
  {
    title: 'CARPRICE MAIN SITE',
    image: carpriceRu,
    description: '',
    technologies: 'JavaScript, TypeScript, React, Redux, NextJS',
    url: 'https://carprice.ru',
  },
  {
    title: 'MARKET',
    image: carpriceMarket,
    description: '',
    technologies: 'JavaScript, TypeScript, React, Redux, NextJS',
    url: 'https://market.carprice.ru/cars',
  },
  {
    title: 'DEALER LANDING',
    image: carpriceAuction,
    description: '',
    technologies: 'JavaScript, React, Pug',
    url: 'https://carprice.auction',
  },
];

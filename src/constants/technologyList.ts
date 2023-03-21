import argoCd from '@assets/icons/technologies/argocd.svg';
import bootstrap from '@assets/icons/technologies/bootstrap.svg';
import css3 from '@assets/icons/technologies/css3.svg';
import docker from '@assets/icons/technologies/docker.svg';
import express from '@assets/icons/technologies/express.svg';
import git from '@assets/icons/technologies/git.svg';
import gitlab from '@assets/icons/technologies/gitlab.svg';
import html5 from '@assets/icons/technologies/html5.svg';
import javascript from '@assets/icons/technologies/javascript.svg';
import jest from '@assets/icons/technologies/jest.svg';
import kubernetes from '@assets/icons/technologies/kubernetes.svg';
import materialUI from '@assets/icons/technologies/materialui.svg';
import nextJs from '@assets/icons/technologies/nextjs.svg';
import nodeJs from '@assets/icons/technologies/nodejs.svg';
import npm from '@assets/icons/technologies/npm.svg';
import react from '@assets/icons/technologies/react.svg';
import redux from '@assets/icons/technologies/redux.svg';
import tailwindCSS from '@assets/icons/technologies/tailwindcss.svg';
import typescript from '@assets/icons/technologies/typescript.svg';
import vscode from '@assets/icons/technologies/vscode.svg';
import vueJs from '@assets/icons/technologies/vuejs.svg';

const TECHNOLOGY_LIST = [
  {
    label: 'HTML5',
    Icon: html5,
    description: 'Markup language used for structuring and presenting content on the World Wide Web',
  },
  {
    label: 'CSS',
    Icon: css3,
    description: 'Language for describing the presentation of Web pages, including colors, layout, and fonts',
  },
  {
    label: 'JavaScript',
    Icon: javascript,
    description: 'High-level, often just-in-time compiled language that conforms to the ECMAScript standard',
  },
  {
    label: 'TypeScript',
    Icon: typescript,
    description: 'Strictly-typed variant of JavaScript. TS differs by introducing type annotations to variables and functions',
  },
  {
    label: 'React',
    Icon: react,
    description: 'JavaScript library for building user interfaces based on components.',
  },
  {
    label: 'Vue.js',
    Icon: vueJs,
    description: 'Progressive JavaScript Framework web user interfaces.',
  },
  {
    label: 'Redux',
    Icon: redux,
    description: 'A Predictable State Container for JS Apps and tool for efficient Redux development',
  },
  {
    label: 'Next.js',
    Icon: nextJs,
    description: 'The React Framework to create full-stack web applications by extending the latest React features',
  },
  {
    label: 'Node.js',
    Icon: nodeJs,
    description: 'An open-source, cross-platform JavaScript runtime environment',
  },
  {
    label: 'Express',
    Icon: express,
    description: 'A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications',
  },
  {
    label: 'NPM',
    Icon: npm,
    description: 'NPM stands for Node Package Manager and is one of the multiple package managers (others include Yarn, Bower, etc.)',
  },
  {
    label: 'Material UI',
    Icon: materialUI,
    description: 'React component library that implements Google\'s Material Design. It includes a comprehensive collection of prebuilt components',
  },
  {
    label: 'TailwindCSS',
    Icon: tailwindCSS,
    description: 'Utility-first CSS framework designed to enable users to create applications faster and easier',
  },
  {
    label: 'Bootstrap',
    Icon: bootstrap,
    description: 'CSS Framework for developing responsive and mobile-first websites',
  },
  {
    label: 'Docker',
    Icon: docker,
    description: 'Docker is an open platform for developing, shipping, and running applications',
  },
  {
    label: 'Git',
    Icon: git,
    description: 'A free and open source distributed version control system used to handle projects efficiently',
  },
  {
    label: 'Gitlab',
    Icon: gitlab,
    description: 'Web-based Git repository that provides free open and private repositories, issue-following capabilities, and wikis',
  },
  {
    label: 'Jest',
    Icon: jest,
    description: 'JavaScript testing framework designed to ensure correctness of any JavaScript codebase',
  },
  {
    label: 'Kubernetes',
    Icon: kubernetes,
    description: 'Open-source system for automating deployment, scaling, and management of containerized applications',
  },
  {
    label: 'ArgoCD',
    Icon: argoCd,
    description: 'Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.',
  },
  {
    label: 'VsCode',
    Icon: vscode,
    description: 'Code editor redefined and optimized for building and debugging modern web and cloud applications',
  },
];

export default TECHNOLOGY_LIST;

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

const TECHNOLOGIES_LIST = [
  {
    label: 'HTML5',
    Icon: html5,
    description: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web',
  },
  {
    label: 'CSS',
    Icon: css3,
    description: 'CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts',
  },
  {
    label: 'JavaScript',
    Icon: javascript,
    description: 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard',
  },
  {
    label: 'TypeScript',
    Icon: typescript,
    description: 'TypeScript (TS) is a strictly-typed variant of JavaScript. TS differs by introducing type annotations to variables and functions',
  },
  {
    label: 'React',
    Icon: react,
    description: 'React is JavaScript library for building user interfaces based on components.',
  },
  {
    label: 'Vue.js',
    Icon: vueJs,
    description: 'Vue is a progressive JavaScript Framework web user interfaces.',
  },
  {
    label: 'Redux',
    Icon: redux,
    description: 'A Predictable State Container for JS Apps and toolset for efficient Redux development',
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
  },
  {
    label: 'NPM',
    Icon: npm,
  },
  {
    label: 'Material UI',
    Icon: materialUI,
  },
  {
    label: 'TailwindCSS',
    Icon: tailwindCSS,
  },
  {
    label: 'Bootstrap',
    Icon: bootstrap,
    description: 'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins',
  },
  {
    label: 'Docker',
    Icon: docker,
    description: 'Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly',
  },
  {
    label: 'Git',
    Icon: git,
  },
  {
    label: 'Gitlab',
    Icon: gitlab,
  },
  {
    label: 'Jest',
    Icon: jest,
  },
  {
    label: 'Kubernetes',
    Icon: kubernetes,
  },
  {
    label: 'ArgoCD',
    Icon: argoCd,
    description: 'Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.',
  },
  {
    label: 'VsCode',
    Icon: vscode,
  },
];

export default TECHNOLOGIES_LIST;
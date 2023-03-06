import Image from 'next/image';

import argocd from '@assets/icons/argocd.svg';
import bootstrap from '@assets/icons/bootstrap.svg';
import css3 from '@assets/icons/css3.svg';
import docker from '@assets/icons/docker.svg';
import express from '@assets/icons/express.svg';
import git from '@assets/icons/git.svg';
import gitlab from '@assets/icons/gitlab.svg';
import html5 from '@assets/icons/html5.svg';
import javascript from '@assets/icons/javascript.svg';
import jest from '@assets/icons/jest.svg';
import kubernetes from '@assets/icons/kubernetes.svg';
import materialui from '@assets/icons/materialui.svg';
import nextjs from '@assets/icons/nextjs.svg';
import nodejs from '@assets/icons/nodejs.svg';
import npm from '@assets/icons/npm.svg';
import react from '@assets/icons/react.svg';
import redux from '@assets/icons/redux.svg';
import stylus from '@assets/icons/stylus.svg';
import tailwindcss from '@assets/icons/tailwindcss.svg';
import typescript from '@assets/icons/typescript.svg';
import vscode from '@assets/icons/vscode.svg';
import vuejs from '@assets/icons/vuejs.svg';

import styles from './page.module.scss';

const technologyList = [
  {
    label: 'Argocd',
    icon: argocd,
  },
  {
    label: 'Bootstrap',
    icon: bootstrap,
  },
  {
    label: 'CSS',
    icon: css3,
  },
  {
    label: 'Docker',
    icon: docker,
  },
  {
    label: 'Express',
    icon: express,
  },
  {
    label: 'Git',
    icon: git,
  },
  {
    label: 'Gitlab',
    icon: gitlab,
  },
  {
    label: 'HTML5',
    icon: html5,
  },
  {
    label: 'JavaScript',
    icon: javascript,
  },
  {
    label: 'Jest',
    icon: jest,
  },
  {
    label: 'Kubernetes',
    icon: kubernetes,
  },
  {
    label: 'Material UI',
    icon: materialui,
  },
  {
    label: 'Next.js',
    icon: nextjs,
  },
  {
    label: 'Node.js',
    icon: nodejs,
  },
  {
    label: 'NPM',
    icon: npm,
  },
  {
    label: 'React',
    icon: react,
  },
  {
    label: 'Redux',
    icon: redux,
  },
  {
    label: 'Stylus',
    icon: stylus,
  },
  {
    label: 'TailwindCSS',
    icon: tailwindcss,
  },
  {
    label: 'TypeScript',
    icon: typescript,
  },
  {
    label: 'VsCode',
    icon: vscode,
  },
  {
    label: 'Vue.js',
    icon: vuejs,
  },
];

function Technologies() {
  return (
    <div className={styles.background}>
      {technologyList.map(({ label, icon }) => (
        <Image
          src={icon}
          width="100"
          height="100"
          alt={label}
          key={label}
          className={styles.technologyItem}
        />
      ))}

    </div>
  );
}

export default Technologies;

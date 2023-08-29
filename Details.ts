import html from './public/assets/svgs/html-5.svg';
import css from './public/assets/svgs/css-3.svg';
import sass from './public/assets/svgs/sass.svg';
import js from './public/assets/svgs/js.svg';
import react from './public/assets/svgs/react.svg';
import redux from './public/assets/svgs/redux.svg';
import tailwind from './public/assets/svgs/tailwindcss.svg';
import bootstrap from './public/assets/svgs/bootstrap.svg';
import vscode from './public/assets/svgs/vscode.svg';
import github from './public/assets/svgs/github.svg';
import git from './public/assets/svgs/git.svg';
import npm from './public/assets/svgs/npm.svg';
import postman from './public/assets/svgs/postman.svg';
import nodejs from './public/assets/svgs/nodejs.svg';
import express from './public/assets/svgs/express.svg';
import mongodb from './public/assets/svgs/mongodb.svg';
import nextjs from './public/assets/svgs/nextjs.svg';
import nextjsWhite from './public/assets/svgs/nextjs-white.svg';
import nodeJsWhite from './public/assets/svgs/nodejs-white.svg';
import mongoDBWhite from './public/assets/svgs/mongodb-white.svg';
import githubWhite from './public/assets/svgs/github-white.svg';
import htmlWhite from './public/assets/svgs/html-5-white.svg';
import cssWhite from './public/assets/svgs/css-3-white.svg';
interface IsocialMediaUrlTypes {
  linkdin: string;
  github: string;
  twitter: string;
  instagram: string;
}

interface IworkDetailsType {
  Position: string;
  Company: string;
  Location: string;
  Type: string;
  Duration: string;
}

interface IContactDetails {
  email: string;
}

// Enter your Work Experience here
export const workDetails: IworkDetailsType[] = [
  {
    Position: 'MERN STACK Web Developer',
    Company: `Chetu.inc`,
    Location: 'Noida',
    Type: 'Full Time',
    Duration: 'Jan 2022 - Till Now',
  },
  {
    Position: 'Training',
    Company: `Chetu.inc`,
    Location: 'Noida',
    Type: 'Training',
    Duration: 'Sept 2021 - Jan 2022',
  },
];

export const socialMediaUrl: IsocialMediaUrlTypes =
  {
    linkdin:
      'https://www.linkedin.com/in/anmol-singh-a29218183/',
    github: 'https://github.com/anmolsinghdev',
    twitter: 'https://twitter.com/_anmol_chauhan',
    instagram:
      'https://www.instagram.com/anmolchauhan._/',
  };

// Enter your Education Details here
export const eduDetails: IworkDetailsType[] = [
  {
    Position: 'Backend Development',
    Company: 'Chetu.inc',
    Location: 'Noida',
    Type: 'Full Time',
    Duration: 'Sept 2021 - Jan 2022',
  },
  {
    Position: 'Frontend Development',
    Company: 'Udemy, YouTube, Google',
    Location: 'Online',
    Type: 'Full Time',
    Duration: 'Sept 2021 - Jan 2022',
  },
  {
    Position: `Bachelors's in Computer Application`,
    Company: `I.T.S Mohan Nagar, Ghaziabad`,
    Location: 'Uttar Pradesh',
    Type: 'Full Time',
    Duration: 'Aug 2018 - June 2021',
  },
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  nodejs: nodejs,
  express: express,
  mongodb: mongodb,
  nextjs: nextjs,
  nextjsWhite: nextjsWhite,
  nodeJsWhite: nodeJsWhite,
  mongoDBWhite: mongoDBWhite,
  githubWhite: githubWhite,
  htmlWhite: htmlWhite,
  cssWhite: cssWhite,
};

export const ContactDetails: IContactDetails = {
  email: 'anmolsinghdev@outlook.com',
};

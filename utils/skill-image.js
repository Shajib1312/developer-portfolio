import css from '/public/svg/skills/css.svg';
import firebase from '/public/svg/skills/firebase.svg';
import git from '/public/svg/skills/git.svg';
import graphql from '/public/svg/skills/graphql.svg';
import html from '/public/svg/skills/html.svg';
import javascript from '/public/svg/skills/javascript.svg';
import materialui from '/public/svg/skills/materialui.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import nodeJS from '/public/svg/skills/nodeJS.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import prisma from '/public/svg/skills/prisma.svg';
import react from '/public/svg/skills/react.svg';
import redux from '/public/svg/skills/redux.svg';
import sass from '/public/svg/skills/sass.svg';
import strapi from '/public/svg/skills/strapi.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import typescript from '/public/svg/skills/typescript.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'materialui':
      return materialui;
    case 'strapi':
      return strapi;
    case 'prisma':
      return prisma;
    case 'sass':
      return sass;
    case 'redux':
      return redux;
    case 'nodeJS':
      return nodeJS;
    default:
      break;
  }
}

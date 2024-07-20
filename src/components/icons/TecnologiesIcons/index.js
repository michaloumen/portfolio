import React from 'react';
import { ReactComponent as Git } from './git.svg';
import { ReactComponent as GraphQl } from './graphql.svg';
import { ReactComponent as Html } from './html.svg';
import { ReactComponent as Javascript } from './javascript.svg';
import { ReactComponent as Jira } from './jira.svg';
import { ReactComponent as MaterialUi } from './material.svg';
import { ReactComponent as Mocha } from './mocha.svg';
import { ReactComponent as MongoDb } from './mongodb.svg';
import { ReactComponent as Node } from './nodejs.svg';
import { ReactComponent as ReactIcon } from './react.svg';
import { ReactComponent as SendGrid } from './sendgrid.svg';
import { ReactComponent as Next } from './next.svg';

const TechnologiesIcons = [
  { name: 'Javascript', image: <div><Javascript /></div> },
  { name: 'React', image: <div><ReactIcon /></div> },
  { name: 'Node', image: <div><Node /></div> },
  { name: 'Next', image: <div><Next /></div> },
  { name: 'GraphQL', image: <div><GraphQl /></div> },
  { name: 'Git', image: <div><Git /></div> },
  { name: 'MongoDB', image: <div><MongoDb /></div> },
  { name: 'Html', image: <div><Html /></div> },
  { name: 'Mocha', image: <div><Mocha /></div> },
  { name: 'Jira', image: <div><Jira /></div> },
  { name: 'SendGrid', image: <div><SendGrid /></div> },
  { name: 'MaterialUi', image: <div><MaterialUi /></div> }
];

export default TechnologiesIcons;

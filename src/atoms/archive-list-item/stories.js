/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links/src/index';
import ArchiveListItem from './index';

const meeting = {node: {fields: {slug: '/meeting-1'}, frontmatter: {date: any.date(), talk: {title: any.sentence()}}}};

storiesOf('Atoms/Archive List-Item', module)
  .addDecorator(storyRouter({'/meeting-1': linkTo('Organisms/Meeting', 'current')}))
  .add('default', () => <ArchiveListItem meeting={meeting} />);

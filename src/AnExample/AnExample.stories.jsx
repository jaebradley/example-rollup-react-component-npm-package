import React from 'react';
import { storiesOf } from '@storybook/react';
import AnExample from './index.jsx';

storiesOf('AnExample', module)
  .add('basic usage', () => (<AnExample />));

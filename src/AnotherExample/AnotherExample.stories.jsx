import React from 'react';
import { storiesOf } from '@storybook/react';
import AnotherExample from './index.jsx';

storiesOf('AnotherExample', module)
  .add('basic usage', () => (<AnotherExample />));

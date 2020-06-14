import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import AnotherExample from './index.jsx';

export default {
  title: 'AnotherExample',
  decorators: [withA11y],
  parameters: {
    notes: 'The AnotherExample component',
  },
};

export const basicExample = () => (
  <AnotherExample />
);

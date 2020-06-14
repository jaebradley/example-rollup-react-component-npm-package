import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import AnExample from './index.jsx';

export default {
  title: 'AnExample',
  decorators: [withA11y],
  parameters: {
    notes: 'The AnExample component',
  },
};

export const basicExample = () => (
  <AnExample />
);

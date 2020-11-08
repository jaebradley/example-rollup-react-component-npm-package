import React from 'react';

import AnExample from './index.jsx';

export default {
  title: 'AnExample',
  component: AnExample,
};

const Template = (args) => <AnExample {...args} />;

export const BasicExample = Template.bind({});
export const ExampleWithCustomName = Template.bind({});
ExampleWithCustomName.args = { name: 'SomeOtherName' };

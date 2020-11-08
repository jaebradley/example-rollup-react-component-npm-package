import React from 'react';

import AnotherExample from './index.jsx';

export default {
  title: 'AnotherExample',
  component: AnotherExample,
};

const Template = (args) => <AnotherExample {...args} />;

export const AnotherBasicExample = Template.bind({});

export const ExampleWithCustomName = Template.bind({});
ExampleWithCustomName.args = { name: 'SomeOtherName' };


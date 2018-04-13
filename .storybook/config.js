import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';

addDecorator(centered);
addDecorator(checkA11y);

setDefaults({
  inline: false,
  header: true,
  source: true,
});

setTimeout(() => setOptions({
  name: 'EXAMPLE REACT PACKAGE',
  url: 'https://github.com/jaebradley/example-react-component-npm-package',
  showAddonPanel: true,
  addonPanelInRight: true,
}), 1000);

function loadStories() {
  require('../src/AnExample/AnExample.stories.jsx');
  require('../src/AnotherExample/AnotherExample.stories.jsx');
}

configure(loadStories, module);

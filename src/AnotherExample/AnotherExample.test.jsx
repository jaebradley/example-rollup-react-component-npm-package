import React from 'react';
import {
  shallow,
} from 'enzyme';
import renderer from 'react-test-renderer';

import AnotherExample from '.';

describe('AnotherExample', () => {
  describe('when name prop is defined', () => {
    it('renders name prop', () => {
      const anExample = shallow(<AnotherExample name="Some Name" />);
      expect(anExample.text()).toEqual('This is another example bySome Name');
    });

    it('renders correctly', () => {
      const tree = renderer.create(<AnotherExample name="Some Name" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when name prop is not defined', () => {
    it('renders with default name prop', () => {
      const anExample = shallow(<AnotherExample />);
      expect(anExample.text()).toEqual('This is another example byjaebaebae');
    });

    it('renders correctly', () => {
      const tree = renderer.create(<AnotherExample />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

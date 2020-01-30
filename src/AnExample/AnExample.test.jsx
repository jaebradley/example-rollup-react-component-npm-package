import React from 'react';
import {
  shallow,
} from 'enzyme';
import renderer from 'react-test-renderer';

import AnExample from '.';

describe('AnExample', () => {
  describe('when name prop is defined', () => {
    it('renders name prop', () => {
      const anExample = shallow(<AnExample name="Some Name" />);
      expect(anExample.text()).toEqual('This is an example bySome Name');
    });

    it('renders correctly', () => {
      const tree = renderer.create(<AnExample name="Some Name" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when name prop is not defined', () => {
    it('renders with default name prop', () => {
      const anExample = shallow(<AnExample />);
      expect(anExample.text()).toEqual('This is an example byjaebaebae');
    });

    it('renders correctly', () => {
      const tree = renderer.create(<AnExample />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

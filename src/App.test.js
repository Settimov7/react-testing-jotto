import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

import { findByTestAttr } from '../test/test-utils';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific for this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<App { ...props }/>);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');

  expect(appComponent).toHaveLength(1);
});

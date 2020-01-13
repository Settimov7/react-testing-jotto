import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { checkProps, findByTestAttr } from '../test/test-utils';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific for this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
	return shallow(<Congrats { ...props }/>)
};

test('renders without error', () => {
	const wrapper = setup({ success: false });
	const congrats = findByTestAttr(wrapper, 'component-congrats');

	expect(congrats.length).toBe(1);
});

test('renders no text when "success" prop is false', () => {
	const wrapper = setup({ success: false });
	const congrats = findByTestAttr(wrapper, 'component-congrats');

	expect(congrats.text()).toBe('');
});

test('renders non-empty congrats message when "success" prop is true', () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, 'congrats-message');

	expect(message.text().length).not.toBe(0);
});

test('doesnt throw warning with expected props', () => {
	const expectedProps = { success: false };

	checkProps(Congrats, expectedProps);
});
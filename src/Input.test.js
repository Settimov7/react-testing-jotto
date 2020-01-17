import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/test-utils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
	const store = storeFactory(initialState);

	return shallow(<Input store={ store }/>).dive().dive();
};

describe('render', () => {
	describe('word has not been guessed', () => {
		let wrapper;

		beforeEach(() => {
			const initialState = { success: false };

			wrapper = setup(initialState);
		});

		test('renders component without error', () => {
			const component = findByTestAttr(wrapper, 'component-input');

			expect(component).toHaveLength(1);
		});

		test('renders input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');

			expect(inputBox).toHaveLength(1);
		});

		test('renders submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');

			expect(submitButton).toHaveLength(1);
		});
	});

	describe('word has been guessed', () => {
		let wrapper;

		beforeEach(() => {
			const initialState = { success: true };

			wrapper = setup(initialState);
		});

		test('renders component without error', () => {
			const component = findByTestAttr(wrapper, 'component-input');

			expect(component).toHaveLength(1);
		});

		test('doesnt render input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box');

			expect(inputBox).toHaveLength(0);
		});

		test('doesnt render submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');

			expect(submitButton).toHaveLength(0);
		});
	});
});

describe('update state', () => {

});
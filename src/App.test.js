import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

import { findByTestAttr, storeFactory } from '../test/test-utils';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} initialState - Component props specific for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
	const store = storeFactory(initialState);

	return shallow(<App store={ store }/>).dive().dive();
};

test('renders without error', () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, 'component-app');

	expect(appComponent).toHaveLength(1);
});

describe('redux props', () => {
	test('has "success" piece of state as prop', () => {
		const success = false;
		const wrapper = setup({ success });
		const successProp = wrapper.instance().props.success;

		expect(successProp).toBe(success);
	});

	test('has "guessedWords" piece of state as prop', () => {
		const guessedWords = [
			{
				guessedWord: 'train',
				letterMatchCount: 3,
			},
		];
		const wrapper = setup({ guessedWords });
		const guessedWordsProp = wrapper.instance().props.guessedWords;

		expect(guessedWordsProp).toEqual(guessedWords);
	});

	test('has "secretWord" piece of state as prop', () => {
		const secretWord = 'party';
		const wrapper = setup({ secretWord });
		const secretWordProp = wrapper.instance().props.secretWord;

		expect(secretWordProp).toEqual(secretWord);
	});

	test('"getSecretWord" action creator as a function on the props', () => {
		const wrapper = setup();
		const getSecretWordProp = wrapper.instance().props.getSecretWord;

		expect(getSecretWordProp).toBeInstanceOf(Function);
	});
});

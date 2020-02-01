import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/test-utils';
import Input, { UnconnectedInput } from './Input';

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

describe('redux props', () => {
	test('has success piece of state as prop', () => {
		const success = true;
		const wrapper = setup({ success });
		const successProp = wrapper.instance().props.success;

		expect(successProp).toBe(success);
	});

	test('"guessWord" action creator is a function prop', () => {
		const wrapper = setup();
		const guessWordProp = wrapper.instance().props.guessWord;

		expect(guessWordProp).toBeInstanceOf(Function);
	});
});

describe('"guessWord" action creator call', () => {
	const guessedWord = 'train';
	let guessWordMock;
	let wrapper;

	beforeEach(() => {
		guessWordMock = jest.fn();
		const props = {
			guessWord: guessWordMock,
		};
		wrapper = shallow(<UnconnectedInput { ...props }/>);
		const submitButton = findByTestAttr(wrapper, 'submit-button');

		wrapper.setState({ currentGuess: guessedWord });

		submitButton.simulate('click', {
			preventDefault() {
			}
		});
	});

	test('calls "guessWord" when button is clicked', () => {
		const guessWordMockCount = guessWordMock.mock.calls.length;

		expect(guessWordMockCount).toBe(1);
	});

	test('calls "guessWord" with input value as argument', () => {
		const guessWordMockArgument = guessWordMock.mock.calls[0][0];

		expect(guessWordMockArgument).toBe(guessedWord);
	});
});
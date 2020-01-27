import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/configStore';

/**
 * Return node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test="${ value }"]`);

export const checkProps = (component, confirmingProps) => {
	const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name);

	expect(propError).toBeUndefined();
};

/**
 * Create a testing store with imported reducers, middleware and initial state.
 * globals: rootReducer, middlewares
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

	return createStoreWithMiddleware(rootReducer, initialState);
};

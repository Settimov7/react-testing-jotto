import checkPropTypes from 'check-prop-types';

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
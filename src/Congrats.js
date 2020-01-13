import React from 'react';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if success prop is false)
 */
export default ({ success }) => (
	<div data-test='component-congrats'>
		{ success && (
			<span data-test='congrats-message'>
				Congratulations! You guessed the word!
			</span>
		) }
	</div>
);
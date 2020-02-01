import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
	/**
	 * @method constructor
	 * @param {object} props - Component props
	 * @returns {undefined}
	 */
	constructor(props) {
		super(props);

		this.state = {
			currentGuess: null,
		};
	}

	handleChangeButtonSubmit = (event) => {
		this.setState({ currentGuess: event.target.value })
	};

	handleClickButtonSubmit = (event) => {
		event.preventDefault();

		const { currentGuess } = this.state;

		currentGuess && this.props.guessWord(this.state.currentGuess);
	};

	render() {
		const contents = this.props.success
			? null
			: (
				<form className='form-inline'>
					<input
						className='mb-2 mx-sm-3'
						type='text'
						placeholder='enter guess'
						data-test='input-box'
						value={ this.state.currentGuess }
						onChange={ this.handleChangeButtonSubmit }
					/>

					<button
						className='btn btn-primary mb-2'
						type='submit'
						data-test='submit-button'
						onClick={ this.handleClickButtonSubmit }
					>Submit
					</button>
				</form>
			);

		return (
			<div data-test='component-input'>
				{ contents }
			</div>
		);
	}
}

const mapStateToProps = ({ success }) => ({
	success
});

const mapDispatchToProps = {
	guessWord,
};

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput);
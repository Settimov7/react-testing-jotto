import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

class Input extends Component {
	render() {
		const contents = this.props.success
			? null
			: (
				<form className='form-inline'>
					<input className='mb-2 mx-sm-3' type='text' placeholder='enter guess' data-test='input-box'/>

					<button className='btn btn-primary mb-2' type='submit' data-test='submit-button'>Submit</button>
				</form>
			);

		return (
			<div data-test='component-input'>
				{contents}
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

export default connect(mapStateToProps, mapDispatchToProps)(Input);
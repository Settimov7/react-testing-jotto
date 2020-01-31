import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions';

class App extends Component {
	render() {
		const { success, guessedWords } = this.props;

		return (
			<div data-test='component-app' className='container'>
				<h1>Jotto</h1>

				<Congrats success={ success }/>

				<Input/>

				<GuessedWords guessedWords={ guessedWords }/>
			</div>
		);
	}
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => ({
	success,
	guessedWords,
	secretWord,
});

const mapDispatchToProps = {
	getSecretWord,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

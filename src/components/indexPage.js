import React from 'react';
import {Link} from 'react-router';

class IndexPage extends React.Component {
	render() {
		return (
			<div id="indexDiv">
				<button id="quizLink"><Link to="quiz">Nutrition Quiz</Link></button>
				<span id="description">Search for a repice to see some healthier options</span>
			</div>
		);
	}
}

export default IndexPage;

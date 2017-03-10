import React from 'react';
import {Link} from 'react-router';

class IndexPage extends React.Component {
	render() {
		return (
			<div>
				<span id="quizLink">Play the <Link to="quiz">quiz</Link></span>
			</div>
		);
	}
}

export default IndexPage;

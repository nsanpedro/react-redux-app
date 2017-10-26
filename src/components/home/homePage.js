import React from 'React';
import {Link} from 'React-router';

class HomePage extends React.Component {
	render() {
		return(
			<div className="jumbotron">
				<h1>Home Page component</h1>
				<p>React components</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
		);

	}
}

exports default HomePage;
import React, { Component } from 'react';

class AboutPage extends Component {
	render() {
		return (
			<div className="container">
				<h1>Redux</h1>
				<p>
                    In this guide, we'll walk through the process of creating a simple Todo app: https://redux.js.org/basics
				</p>
				<img className="responsive-img" src="../../scheme.png" />
			</div>
		);
	}
}

export default AboutPage;

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
// import LoginPage from './components/login/LoginPage';
import SearchPage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
	<Route path="/" component={App}>
		{/*<IndexRoute component={LoginPage} />*/}
		<Route path="/about/" component={AboutPage} />
        <Route path="/search-page/" component={SearchPage} />
	</Route>
);
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './../../utils/store';

// import SignIn from './../../containers/Auth/SignIn/';

// import SignUp from './containers/Auth/SignUp/';
// import SearchPage from './containers/Main/SearchPage/';
// import RepositoryPage from './containers/Main/RepositoryPage/';
// import registerServiceWorker from './registerServiceWorker';

const isLoggedIn = () => {
    const token = localStorage.getItem('accessToken');
    return token ? token.length > 0 : false;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isLoggedIn() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/'
            }}/>
        )
    )}/>
);

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        !isLoggedIn() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/search-page/'
            }}/>
        )
    )}/>
);


// ReactDOM.render(
    {/*<Provider store={store}>*/}
        {/*<BrowserRouter>*/}
            {/*<Switch>*/}
                {/*<AuthRoute exact path="/" component={SignIn}/>*/}
                {/*<AuthRoute path="/sign-up" component={SignUp}/>*/}
                {/*<PrivateRoute path="/search-page/" component={SearchPage} />*/}
                {/*<PrivateRoute path="/repository/:name/:repoName" component={RepositoryPage} />*/}
            {/*</Switch>*/}
        {/*</BrowserRouter>*/}
    // </Provider>,
    // document.getElementById('app')
// );
// registerServiceWorker();




class LoginPage extends Component {
	render() {
		return (
			<div className="container">
				<h1>Login</h1>
				<p>
                    Please login here.
				</p>
			</div>
		);
	}
}

export default LoginPage;
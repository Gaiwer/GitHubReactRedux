import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import { loadRepos } from './actions/reposAction';
// import SearchPage from "../../react-app-zengineers/src/containers/Main/SearchPage";
// import SignUp from "../../react-app-zengineers/src/containers/Auth/SignUp";
// import RepositoryPage from "../../react-app-zengineers/src/containers/Main/RepositoryPage";
// import { signUp } from './actions/authActions';
// import SearchPage from "../../react-app-zengineers/src/containers/Main/SearchPage";
// import registerServiceWorker from "./registerServiceWorker";
// import SignUp from "./containers/Auth/SignUp";
// import RepositoryPage from "./containers/Main/RepositoryPage";
// import SignIn from "./containers/Auth/SignIn";

let currentValue;
function handleChange() {
	let previousValue = currentValue;
	currentValue = store.getState().user;

	if (previousValue !== currentValue) {
		store.dispatch(loadRepos(store.getState().user));
	}
}

const store = configureStore();
store.dispatch(loadRepos(store.getState().user));
store.subscribe(handleChange);


// const isLoggedIn = () => {
//     const token = localStorage.getItem('accessToken');
//     return token ? token.length > 0 : false;
// };


// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         isLoggedIn() ? (
//             <Component {...props}/>
//         ) : (
//             <Redirect to={{
//                 pathname: '/'
//             }}/>
//         )
//     )}/>
// );
//
// const AuthRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         !isLoggedIn() ? (
//             <Component {...props}/>
//         ) : (
//             <Redirect to={{
//                 pathname: '/search-page/'
//             }}/>
//         )
//     )}/>
// );

render(
	<Provider store={store}>
        <Router history={browserHistory} routes={routes} />
        {/*<AuthRoute exact path="/" component={SignIn}/>*/}
        {/*<AuthRoute path="/sign-up" component={SignUp}/>*/}
	</Provider>,
	document.getElementById('app')
);




// render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <Switch>
//                 <Router history={browserHistory} routes={routes} />
//                 {/*<AuthRoute exact path="/" component={SignIn}/>*/}
//                 {/*<AuthRoute path="/sign-up" component={SignUp}/>*/}
//                 {/*<PrivateRoute path="/search-page/" component={SearchPage} />*/}
//                 {/*<PrivateRoute path="/repository/:name/:repoName" component={RepositoryPage} />*/}
//             </Switch>
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById('root')
// );
// registerServiceWorker();
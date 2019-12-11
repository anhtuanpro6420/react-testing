import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import 'antd/dist/antd.css';
import Newsfeed from './containers/Newsfeed/Newsfeed';
import Layout from './hoc/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const Auth = React.lazy(() => {
	return import('./containers/Auth/Auth');
});

const App = props => {
	const { onTryAutoSignup } = props;

	useEffect(() => {
		onTryAutoSignup();
	}, [onTryAutoSignup]);
	let routes = (
		<Switch>
			<Route path="/auth" render={props => <Auth {...props} />} />
			<Redirect to="/auth" />
		</Switch>
	);
	if (props.isAuthenticated) {
		routes = (
			<Switch>
				<Route path="/logout" component={Logout} />
				<Route path="/" exact component={Newsfeed} />
				<Redirect to="/" />
			</Switch>
		);
	}

	return (
		<Layout>
			<Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
		</Layout>
	);
};

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState())
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

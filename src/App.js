import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Newsfeed from './containers/Newsfeed/Newsfeed';

const Signup = React.lazy(() => import('./containers/Signup/Signup'));
const Login = React.lazy(() => import('./containers/Login/Login'));
const ShareVideo = React.lazy(() =>
	import('./containers/ShareVideo/ShareVideo')
);

class App extends React.Component {
	render() {
		let routes = (
			<Switch>
				<Route
					path="/auth/login"
					render={() => (
						<Suspense fallback={<div>Loading...</div>}>
							<Login />
						</Suspense>
					)}
				/>
				<Route
					path="/sign-up"
					render={() => (
						<Suspense fallback={<div>Loading...</div>}>
							<Signup />
						</Suspense>
					)}
				/>
				<Route
					path="/share"
					render={() => (
						<Suspense fallback={<div>Loading...</div>}>
							<ShareVideo />
						</Suspense>
					)}
				/>
				<Route path="/" exact component={Newsfeed} />
				<Redirect to="/" />
			</Switch>
		);

		return <>{routes}</>;
	}
}

export default App;

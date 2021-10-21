import { lazy, useEffect } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/styles.css';

import FullPageLoader from './components/loaders/FullPageLoader';
import ErrorFallback from './Error/ErrorBoundary/ErrorFallback';
import errorHandler from './Error/ErrorBoundary/errorHandler';
import { withSuspense } from './hoc/withSuspense';

import Navbar from './components/Navbar'
import LogIn from './components/forms/log-in/LogIn';
import SignUp from './components/forms/sign-up/SignUp';


const Routes = withSuspense(
	lazy(() => import(/* webpackChunkName: "routes" */ './routes/Routes')),
	<FullPageLoader />
);

function App() {
	useEffect(() => {
		// Disable logs in production
		if (process.env.NODE_ENV !== 'development') {
			let noOp = function () {}; // no-op function
			if (!window.console) {
				console = {
					log: noOp,
					warn: noOp,
					error: noOp,
				};
			} else {
				console = {
					...console,
					log: noOp,
					warn: noOp,
					error: noOp,
				};
			}
		}
	}, []);

	return (
		<>
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/signUp" component={SignUp} />
						<Route exact path="/logIn" component={LogIn} />
					</Switch>
					
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;

/*
<ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
				<Switch>
					<Route path="/" component={Routes} />
				</Switch>
			</ErrorBoundary>
			<ToastContainer /> */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import {
	ReduxRouter,
	routerStateReducer,
	reduxReactRouter,
	push,
} from 'redux-router';
import { Route, Link } from 'react-router';

let store = createStore(todoApp)

class Root extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
						<App/>
				</Provider>
			</div>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
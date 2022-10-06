import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {fetchCategories} from './actions/categories';
import {fetchProducts} from './actions/products';
import {createHashHistory} from 'history';
import {Router} from 'react-router-dom';
import {categoryApi} from './gateways/CategoryApi';

const history = createHashHistory();
const deps = {history, categoryApi};

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(deps))));
store.dispatch(fetchCategories());
store.dispatch(fetchProducts());

ReactDOM.render(
	<div className="content">
		<div className="container">
			<Provider store={store}>
				<Router history={history}>
					<App/>
				</Router>
			</Provider>
		</div>
	</div>,
	document.getElementById('root')
);

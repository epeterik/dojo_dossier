import React from 'react';
import ReactDOM from 'react-dom';
import './ui-toolkit/css/nm-cx/main.css';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { dossierReducer } from './reducer';

const store = createStore(dossierReducer);
console.log(store);

const Root = () => {
	return (<Provider store={store}>
                <App />
            </Provider>);
}

ReactDOM.render(<Root />, document.getElementById('root'));


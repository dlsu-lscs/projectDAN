import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

class App extends Component {
    /*
        TODO: 
            - Method for getting auth user and loading necessary assets
            - Flag the loading variable once all the assets and ajax calls have been completed
    */
    render() {
        return(
            <Provider store = { store } >
                <Routes></Routes>
            </Provider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Link } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Todo from './Todo.jsx';
import DocumentTitle from 'react-document-title';

import * as actions from '../../actions/Todoaction';
import store from '../../stores/todo_store';
import injectTapEventPlugin from 'react-tap-event-plugin';

//injectTapEventPlugin();



require('./../App.scss');

const SmartForm = connect(state => state, actions)(Todo);

const reduxMiddleware = applyMiddleware(thunk, createLogger());

/*export default class Main extends React.Component {
 render() {
 return <Todo><Header /></Todo>;
 }
 }*/

export default Main => (
    <Provider store={compose(reduxMiddleware, window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(store)}>
        <SmartForm {...Main}/>
    </Provider>
);

export {default as Text} from './../form/Textfield'
export {default as Password} from './../form/Password'
export {default as SubmitButton} from './../form/SubmitButton';
export {default as SocmedButton} from './../form/SocmedButton';
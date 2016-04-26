import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import Todo from './Todo.jsx';

require('./App.scss');

import Header from './Header.jsx';

export default class Main extends React.Component {
    render() {
        return <Todo><Header /></Todo>;
    }
}
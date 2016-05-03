import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import $ from 'jquery';

require('./App.scss');

import Header from './Header.jsx';

export default React.createClass({
    displayName: 'Todo',

    getInitialState: function() {
        return {
            username: '',
            lastGistUrl: ''
        };
    },

    componentDidMount: function() {
        this.serverRequest = $.get('http://private-b1f381-keyalias.apiary-mock.com/v1/auth/facebook', function (error, response, body) {
                console.log('Status:', response.statusCode);
                console.log('Headers:', JSON.stringify(response.headers));
                console.log('Response:', body);
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        return (
            <div>
                {this.state.username}'s last gist is
                <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
});
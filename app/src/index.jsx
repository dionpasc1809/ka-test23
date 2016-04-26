import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory, browserHistory } from 'react-router';
import Main from './components/Main.jsx';
import Register from './components/Register.jsx';
import Createpassword from './components/Createpassword.jsx';
import Completed from './components/Completed.jsx';

main();
function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
            </Route>
            <Route path="/register" component={Register}>
            </Route>
            <Route path="/createpassword" component={Createpassword}>
            </Route>
            <Route path="/completed" component={Completed}>
            </Route>
        </Router>
        , app);
}

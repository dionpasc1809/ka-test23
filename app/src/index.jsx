import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import Main from './components/main/Main.jsx';
import Register from './components/register/Register.jsx';
import Createpassword from './components/createpassword/Createpassword.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import PersonalData from './components/dashboard/personal/PersonalData.jsx';
import Credentials from './components/dashboard/credentials/Credentials.jsx';
import Completed from './components/Completed.jsx';

import Apitest from './components/Apitest.jsx'


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
                <Route path="/api" component={Apitest}>
                </Route>
                <Route path="/dashboard" component={Dashboard}>
                </Route>

                <Route path="/dashboard/personal-data" component={PersonalData}></Route>
                <Route path="/dashboard/kredensial" component={Credentials}></Route>

            </Router>
        , app);
}

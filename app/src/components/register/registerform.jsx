import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Link } from 'react-router';

import without from 'lodash.without';
import assign from 'lodash.assign';

import $ from 'jquery';

const noop = () => undefined;


export default React.createClass({
    displayName: 'Registerform',

    propTypes: {
        children: PropTypes.node,
        values: PropTypes.object,
        update: PropTypes.func,
        reset: PropTypes.func,
        onSubmit: PropTypes.func
    },

    childContextTypes: {
        update: PropTypes.func,
        reset: PropTypes.func,
        submit: PropTypes.func,
        values: PropTypes.object,
        registerValidation: PropTypes.func,
        isFormValid: PropTypes.func,
    },

    contextTypes: {
        router: React.PropTypes.object
    },

    getDefaultProps() {
        return {
            onSubmit: noop
        };
    },

    validations: [],

    registerValidation(isValidFunc) {
        this.validations = [...this.validations, isValidFunc];
        return this.removeValidation.bind(null, isValidFunc);
    },

    removeValidation(ref) {
        this.validations = without(this.validations, ref);
    },

    isFormValid(showErrors) {
        return this.validations.reduce((memo, isValidFunc) =>
        isValidFunc(showErrors) && memo, true);
    },

    validatePassword() {

    },

    submit(){
        if (this.isFormValid(true)) {
            this.props.onSubmit(assign({}, this.props.values));
            this.props.reset();
            console.log(this.props.values);

            // send Registration data via AJAX

            let regstatus;

            $.post('http://private-b1f381-keyalias.apiary-mock.com/v1/user/register', {email: this.props.values.email, password: this.props.values.password} , (error, response, body) => {
                console.log('Status:', response.statusCode);
                console.log('Headers:', JSON.stringify(response.headers));
                console.log('Response:', JSON.parse(body.responseText).message);

                regstatus = JSON.parse(body.responseText).message;
                if(regstatus=='insert data success') {
                    browserHistory.push('/completed')
                }
            });
        }
    },

    getChildContext() {
        return {
            update: this.props.update,
            reset: this.props.reset,
            submit: this.submit,
            values: this.props.values,
            registerValidation: this.registerValidation,
            isFormValid: this.isFormValid
        };
    },

    render() {
        const item = 'asdasd';
        return <form>
                {this.props.children}
            </form>;
    }
});


//<input type="text" className="inputs email" placeholder="Alamat email" {...email}></input>
//<input type="password" className="inputs password" placeholder="Password" {...password}></input>

/*

 export default reduxForm({
 form: 'simple',
 fields
 })(Todo)*/

// <input type="text" className="inputs email" placeholder="Alamat email" onChange={this.setEmail.bind(this)} value={this.state.email}></input>
// <input type="password" className="inputs password" placeholder="Password"></input>
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Header from './../Header.jsx';
import Form, {Text, Password, SubmitButton, SocmedButton} from './Index';

export default class Main extends React.Component {
    render() {

        return <div className="popup main main-container">
            <Header />
            <div className="logobar">
                <div className="keyaliaslogo"></div>
            </div>
            <div className="mainpanel">
                <div className="text">Gunakan social media anda</div>
                <div className="socmed-container">
                    <SocmedButton
                        classes=""
                    />
                    <div className="socmed googleplus"></div>
                    <div className="socmed linkedin"></div>
                    <div className="socmed twitter"></div>
                </div>
                <div className="text">atau masuk menggunakan email &amp; password anda</div>
                <form>
                    <Form>
                        <Text
                            ref="email"
                            name="email"
                            validate={['required','email']}
                            placeholder="Type your email here"
                            label="EMAIL"/>
                        <Password
                            ref="password"
                            name="password"
                            validate={['required']}
                            placeholder="Type your password here"
                            label="PASSWORD"/>
                        <SubmitButton label="Login"/>
                    </Form>
                    <div className="button register"><Link to="/register">Register</Link></div>
                </form>
                <div className="cantaccess">Tidak bisa mengakses akun anda?</div>

                <div className="footer"><a href="#">KeyAlias @2015</a> | <a href="#">about</a> | <a href="#">press &amp;
                    news</a> | <a href="#">privacy policy</a> | <a href="#">user agreement</a> | <a href="#">FAQ</a> |
                    <a href="#">contact us</a> |
                </div>
            </div>
        </div>;
    }
}

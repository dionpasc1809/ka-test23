import React from 'react';
import ReactDOM from 'react-dom';

import Header from './../Header.jsx';
import Form, {Text, Password, SubmitButton} from './regformprovider';

require('./../App.scss');

export default class Register extends React.Component {
    render() {
        return <div className="popup register main-container">
            <Header />
            <div className="logobar">
                <div className="keyaliaslogo"></div>
            </div>
            <div className="mainpanel">
                <div className="headerpanel">
                    <div className="title">Daftar keyalias sekarang!</div>
                    <div className="subtitle">Hanya dengan sedikit langkah saja</div>
                </div>
                <div className="headerend"></div>
                <div className="text">Masukkan detail akun anda</div>
                <Form>
                    <Text
                        name="email"
                        validate={['required','email']}
                        placeholder="Type your email here"
                        label="EMAIL"/>
                    <Password
                        name="password"
                        validate={['required']}
                        placeholder="Type your password here"
                        label="PASSWORD"/>
                    <Password
                        name="repassword"
                        validate={['required','checkpassword']}
                        placeholder="Type your password here"
                        label="ULANGI PASSWORD"/>
                    <SubmitButton label="Register"/>
                </Form>
                <div className="hadaccount">Sudah punya akun Keyalias?</div>

                <div className="footer"><a href="#">KeyAlias @2015</a> | <a href="#">about</a> | <a href="#">press &amp; news</a> | <a href="#">privacy policy</a> | <a href="#">user agreement</a> | <a href="#">FAQ</a> | <a href="#">contact us</a> |</div>
            </div>
        </div>;
    }
}
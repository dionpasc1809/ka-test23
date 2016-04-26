import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import Todo from './Todo.jsx';

require('./App.scss');

import Header from './Header.jsx';

export default class Main extends React.Component {
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
                <input type="text" className="inputs email" placeholder="Email anda"></input>
                <input type="password" className="inputs password" placeholder="Password"></input>
                <input type="password" className="inputs repassword" placeholder="Ulangi password"></input>
                <div className="button register">register</div>
                <div className="hadaccount">Sudah punya akun Keyalias?</div>

                <div className="footer"><a href="#">KeyAlias @2015</a> | <a href="#">about</a> | <a href="#">press &amp; news</a> | <a href="#">privacy policy</a> | <a href="#">user agreement</a> | <a href="#">FAQ</a> | <a href="#">contact us</a> |</div>
            </div>
        </div>;
    }
}
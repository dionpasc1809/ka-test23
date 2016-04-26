import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import Todo from './Todo.jsx';

require('./App.scss');

import Header from './Header.jsx';

export default class Createpassword extends React.Component {
    render() {
        return <div className="popup createpassword main-container">
            <Header />
            <div className="logobar">
                <div className="keyaliaslogo"></div>
            </div>
            <div className="mainpanel">
                <div className="headerpanel">
                    <div className="icon"></div>
                    <div className="title">Buat password anda</div>
                    <div className="subtitle">Diperlukan untuk melindungi data sensitif anda</div>
                </div>
                <div className="headerend"></div>
                <div className="text">Khusus pengguna via social media, anda hanya akan diminta password saat mengakses dashboard</div>
                <input type="password" className="inputs password" placeholder="Password"></input>
                <input type="password" className="inputs repassword" placeholder="Ulangi password"></input>
                <div className="button save">simpan</div>

                <div className="footer"><a href="#">KeyAlias @2015</a> | <a href="#">about</a> | <a href="#">press &amp; news</a> | <a href="#">privacy policy</a> | <a href="#">user agreement</a> | <a href="#">FAQ</a> | <a href="#">contact us</a> |</div>
            </div>
        </div>;
    }
}
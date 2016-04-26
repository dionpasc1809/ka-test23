import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import Todo from './Todo.jsx';

require('./App.scss');

import Header from './Header.jsx';

export default class Completed extends React.Component {
    render() {
        return <div className="popup completed main-container">
            <Header />
            <div className="logobar">
                <div className="keyaliaslogo"></div>
            </div>
            <div className="mainpanel">
                <div className="headerpanel">
                    <div className="icon"></div>
                    <div className="title">Pendaftaran berhasil</div>
                    <div className="subtitle">Link aktifasi telah dikirim ke email anda</div>
                </div>
                <div className="headerend"></div>
                <div className="text">pilih langkah selanjutnya</div>
                <div className="button opendash">buka dashboard</div>
                <div className="button opencube">masuk ke qubicle (5s)</div>

                <div className="footer"><a href="#">KeyAlias @2015</a> | <a href="#">about</a> | <a href="#">press &amp; news</a> | <a href="#">privacy policy</a> | <a href="#">user agreement</a> | <a href="#">FAQ</a> | <a href="#">contact us</a> |</div>
            </div>
        </div>;
    }
}
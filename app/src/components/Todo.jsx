import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:''
        };
    }

    componentWillMount() {

    }

    setEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    render() {
        const item = 'asdasd';
        return <div className="popup main main-container">
            {this.props.children}
            <div className="logobar">
                <div className="keyaliaslogo"></div>
            </div>
            <div className="mainpanel">
                <div className="text">Gunakan social media anda</div>
                <div className="socmed-container">
                    <div className="socmed facebook"></div>
                    <div className="socmed googleplus"></div>
                    <div className="socmed linkedin"></div>
                    <div className="socmed twitter"></div>
                </div>
                <div className="text">atau masuk menggunakan email &amp; password anda</div>
                <input type="text" className="inputs email" placeholder="Alamat email" onChange={this.setEmail.bind(this)} value={this.state.email}></input>
                <input type="password" className="inputs password" placeholder="Password"></input>
                <div className="button login" onClick={this.validateForm}>login</div>
                <div className="button register"><Link to="/register">Register</Link></div>
                <div className="cantaccess">Tidak bisa mengakses akun anda?</div>

                <div className="footer"><a href="#">KeyAlias @2015</a> | <a href="#">about</a> | <a href="#">press &amp;
                    news</a> | <a href="#">privacy policy</a> | <a href="#">user agreement</a> | <a href="#">FAQ</a> |
                    <a href="#">contact us</a> |
                </div>
            </div>
        </div>;
    }
}

// <input type="text" className="inputs email" placeholder="Alamat email" onChange={this.setEmail.bind(this)} value={this.state.email}></input>
// <input type="password" className="inputs password" placeholder="Password"></input>
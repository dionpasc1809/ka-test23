import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import Header from './../Header.jsx';
//import Form, {Text, Password, SubmitButton} from './regformprovider';

require('./../App.scss');

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popupState: false,
        };
    }

    handleOpen = () => {
        this.setState({popupState: true});
    };

    handleClose = () => {
        this.setState({popupState: false});
    };

    render() {
        const style = {
            fontSize:'0.8em'
        };

        const customContentStyle = {
            width: '100%',
            maxWidth: '298px',
            margin:0,
        };

        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return <div className="popup dashboard profile main-container">
            <Header />
            <div className="logobar">
                <div className="keyaliaslogo"></div>
            </div>
            <div className="mainpanel">
                <div className="headerpanel">
                    <div class="profile-img"></div>
                    <div className="profile-name">Insert Name Here</div>
                </div>

                <div class="headerend"></div>

                <div class="dashboard-container">
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <Card class="item">
                            <CardHeader
                                title="INFORMASI DASAR"
                                actAsExpander
                                showExpandableButton
                            />
                            <CardText expandable>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Tanggal Lahir</td>
                                        <td>:</td>
                                        <td>01 Januari 1900</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail</td>
                                        <td>:</td>
                                        <td>contoh@email.com</td>
                                    </tr>
                                    <tr>
                                        <td>Nomor ponsel</td>
                                        <td>:</td>
                                        <td>+6280012345678</td>
                                    </tr>
                                    <tr>
                                        <td>Alamat</td>
                                        <td>:</td>
                                        <td>Jalan Alamat no. 1, Kota Kabupaten 90210</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </CardText>
                        </Card>
                    </MuiThemeProvider>
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <Card class="item alias">
                            <CardHeader
                                title="ALIAS TERHUBUNG"
                                actAsExpander
                                showExpandableButton
                            />
                            <CardText expandable>
                                <div class="alias-container">
                                    <div class="alias-item">
                                        <div class="alias-type">Qubicle</div>
                                        <div class="alias-name">@Something01</div>
                                    </div>
                                    <div class="alias-item">
                                        <div class="alias-type">Qubicle</div>
                                        <div class="alias-name">@Something01</div>
                                    </div>
                                    <div class="alias-item">
                                        <div class="alias-type">Qubicle</div>
                                        <div class="alias-name">@Something01</div>
                                    </div>
                                    <div class="alias-item">
                                        <div class="alias-type">Qubicle</div>
                                        <div class="alias-name">@Something01</div>
                                    </div>
                                    <div class="alias-item">
                                        <div class="alias-type">Qubicle</div>
                                        <div class="alias-name">@Something01</div>
                                    </div>
                                    <div class="alias-item">
                                        <div class="alias-type">Qubicle</div>
                                        <div class="alias-name">@Something01</div>
                                    </div>
                                    <div class="alias-item">
                                        <div class="alias-type">Qubicle</div>
                                        <div class="alias-name">@Something01</div>
                                    </div>
                                    <div class="alias-item">
                                        <div class="alias-type">Qubicle</div>
                                        <div class="alias-name">@Something01</div>
                                    </div>
                                </div>
                            </CardText>
                        </Card>
                    </MuiThemeProvider>
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <Card class="item minat">
                            <CardHeader
                                title="MINAT"
                                actAsExpander
                                showExpandableButton
                            />
                            <CardText expandable>
                                <RaisedButton label="Dialog With Custom Width" onTouchTap={this.handleOpen} />
                                <Dialog
                                    title="Tambah Minat"
                                    actions={actions}
                                    modal={true}
                                    contentStyle={customContentStyle}
                                    open={this.state.popupState}
                                >
                                    This dialog spans the entire width of the screen.
                                </Dialog>
                                <div class="minat-container">
                                    <RaisedButton class="minat-item" labelStyle={style} label="Olahraga" />
                                    <RaisedButton class="minat-item" labelStyle={style} label="Musik" />
                                    <RaisedButton class="minat-item" labelStyle={style} label="Fotografi" />
                                    <RaisedButton class="minat-item" labelStyle={style} label="Rupa-Rupa" />
                                    <RaisedButton class="minat-item" labelStyle={style} label="Politik" />
                                    <RaisedButton class="minat-item" labelStyle={style} label="Traveling" />
                                </div>
                            </CardText>
                        </Card>
                    </MuiThemeProvider>
                </div>

                <div className="footer"><a href="#">KeyAlias @2015</a> | <a href="#">about</a> | <a href="#">press &amp; news</a> | <a href="#">privacy policy</a> | <a href="#">user agreement</a> | <a href="#">FAQ</a> | <a href="#">contact us</a> |</div>
            </div>
        </div>;
    }
}
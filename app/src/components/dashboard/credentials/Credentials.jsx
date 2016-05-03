import React from 'react';
import ReactDOM from 'react-dom';

import Header from './../../Header.jsx';
import Form, {ActionButton} from './crdformprovider';

import ActionAddIcon from 'material-ui/svg-icons/content/add';

require('./../../App.scss');

const styles = {
    actionbutton: {
        height:'60px'
    }
};

export default class Credentials extends React.Component {
    render() {
        return <div className="popup dashboard personal-data main-container">
            <Header />
            <div className="logobar">
                <div className="keyaliaslogo"></div>
            </div>
            <div className="mainpanel">
                <div className="headerpanel">
                    <div class="title">Kredensial Anda</div>
                </div>

                <div class="headerend"></div>

                <div class="dashboard-container">
                    <Form>
                        <ActionButton
                            class="trigger-button"
                            label="TAMBAH BARU"
                            icon={<ActionAddIcon />}
                            styles={styles.actionbutton}
                        />
                    </Form>
                </div>

                <div className="footer"><a href="#">KeyAlias @2015</a> | <a href="#">about</a> | <a href="#">press &amp; news</a> | <a href="#">privacy policy</a> | <a href="#">user agreement</a> | <a href="#">FAQ</a> | <a href="#">contact us</a> |</div>
            </div>
        </div>;
    }
}
import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default React.createClass({

    displayName: 'SocmedButton',

    propTypes: {
        label: PropTypes.string
    },

    contextTypes: {
        isFormValid: PropTypes.func,
        submit: PropTypes.func
    },

    getDefaultProps() {
        return {
            label: 'Submit',
            link: true
        };
    },

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <FloatingActionButton
                        className={this.props.classes}
                        iconClassName={this.props.classes}
                        linkButton={this.props.link}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
});
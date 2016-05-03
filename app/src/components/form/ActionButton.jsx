import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from '../../../../node_modules/material-ui/styles/getMuiTheme';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider';

export default React.createClass({

    displayName: 'ActionButton',

    propTypes: {
        label: PropTypes.string
    },

    contextTypes: {
        isFormValid: PropTypes.func.isRequired,
        submit: PropTypes.func.isRequired
    },

    getDefaultProps() {
        return {
            label: 'Submit'
        };
    },

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <RaisedButton
                        className={this.props.classes}
                        fullWidth
                        primary
                        labelPosition="before"
                        label={this.props.label}
                        icon={this.props.icon}
                        style={this.props.styles}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
});
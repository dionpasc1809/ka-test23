import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default React.createClass({

    displayName: 'SubmitButton',

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
                        className="button login"
                        primary
                        disabled={!this.context.isFormValid()}
                        label={this.props.label}
                        onTouchTap={this.context.submit}/>
                </MuiThemeProvider>
            </div>
        );
    }
});
import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as validators from './validators';

export default React.createClass({
    displayName: 'Text',

    propTypes: {
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        label: PropTypes.string
    },

    contextTypes: {
        update: PropTypes.func.isRequired,
        values: PropTypes.object.isRequired,
        registerValidation: PropTypes.func.isRequired
    },

    componentWillMount() {
        this.removeValidationFromContext = this.context.registerValidation(show =>
            this.isValid(show));
    },

    componentWillUnmount() {
        this.removeValidationFromContext();
    },

    getDefaultProps() {
        return {
            validate: []
        }
    },

    getInitialState() {
        return {
            errors: []
        };
    },

    updateValue(value) {
        this.context.update(this.props.name, value);

        if (this.state.errors.length) {
            setTimeout(() => this.isValid(true), 0);
        }
    },

    isValid(showErrors) {
        const errors = this.props.validate
            .reduce((memo, currentName) =>
                memo.concat(validators[currentName](
                    this.context.values[this.props.name]
                )), []);

        if (showErrors) {
            this.setState({
                errors
            });
        }
        return !errors.length;
    },

    onBlur() {
        this.isValid(true);
    },

    onChange(event) {
        this.updateValue(event.target.value)
    },

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <TextField
                        hintText={this.props.placeholder}
                        floatingLabelText={this.props.label}
                        value={this.context.values[this.props.name]}
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        errorText={this.state.errors.length ? (
                            <div>
                              {this.state.errors.map((error, i) => <div key={i}>{error}</div>)}
                            </div>
                            ) : null}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
});
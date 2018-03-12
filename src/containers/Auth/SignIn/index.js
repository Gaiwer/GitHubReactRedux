import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import '../../../App.css';

import {signIn} from '../../../actions/authActions';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invalidFields: {},
            signInError: '',
            form: {
                email: '',
                password: '',
            },
        };
        this.REQUIRED_FIELDS = ['email', 'password'];

        console.log("555");

    }

    // static contextTypes = {
    //     router: PropTypes.object.isRequired,
    // }
    //
    // validate = () => {
    //     const {form} = this.state;
    //     const invalidFields = {};
    //     this.REQUIRED_FIELDS.map((item, idx) => {
    //         if (!form[item] && !form[item].length) {
    //             invalidFields[item] = 'This field is required';
    //         }
    //     });
    //     this.setState({invalidFields});
    //     return Object.keys(invalidFields).length === 0;
    // }
    //
    // setValue = (field, value) => this.setState({
    //     form: {
    //         ...this.state.form,
    //         [field]: value,
    //     },
    // })
    //
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     if (this.validate()) {
    //         const options = {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(this.state.form),
    //         };
    //         this.props.signIn(
    //             options,
    //             this.onSuccess,
    //             () => console.log('ERROR'),
    //         );
    //     }
    // }
    //
    // onSuccess = (data) => {
    //     localStorage.setItem('accessToken', data.token);
    //     this.props.history.push('/search-page/');
    // }

    render() {
        const {form, invalidFields} = this.state;
        return (
            <div>
                <Link to="/sign-up">Sign Up</Link>
                Sign In
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            type="email"
                            value={form.email}
                            onChange={e => this.setValue('email', e.target.value)}
                        />
                        {
                            invalidFields.email &&
                            <span>{invalidFields.email}</span>
                        }
                    </div>
                    <div>
                        <input
                            type="password"
                            value={form.password}
                            onChange={e => this.setValue('password', e.target.value)}
                        />
                        {
                            invalidFields.password &&
                            <span>{invalidFields.password}</span>
                        }
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    signIn: (payload, onSuccess, onFail) => dispatch(signIn(payload, onSuccess, onFail)),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SignIn),
);

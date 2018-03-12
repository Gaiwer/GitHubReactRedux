import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUp } from '../../../actions/authActions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidFields: {},
      form: {
        email: '',
        password: '',
      },
    };
    this.REQUIRED_FIELDS = ['email', 'password'];
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  validate = () => {
    const { form } = this.state;
    const invalidFields = {};
    this.REQUIRED_FIELDS.map((item, idx) => {
      if (!form[item] && !form[item].length) {
        invalidFields[item] = 'This field is required';
      }
    });
    this.setState({ invalidFields });
    return Object.keys(invalidFields).length === 0;
  }

  setValue = (field, value) => this.setState({
    form: {
      ...this.state.form,
      [field]: value,
    },
  })

  onSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.form),
      };
      this.props.signUp(
        options,
        this.onSuccess,
        () => console.log('ERROR'),
      );
    }
  }

  onSuccess = (data) => {
    localStorage.setItem('accessToken', data.token);
    this.props.history.push('/search-page/');
  }

  render() {
    const { form, invalidFields } = this.state;
    return (
      <div>
        <Link to="/">Sign In</Link>
        Sign Up
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
  signUp: (payload, onSuccess, onFail) => dispatch(signUp(payload, onSuccess, onFail)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUp),
);

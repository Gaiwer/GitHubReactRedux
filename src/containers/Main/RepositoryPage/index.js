import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { getRepo } from '../../../actions/mainActions';
import { signOut } from '../../../actions/authActions';

class RepositoryPage extends PureComponent {
  componentDidMount() {
    const payload = {
      name: this.props.match.params.name,
      repoName: this.props.match.params.repoName,
    };
    this.props.getRepo(
      payload,
      () => console.log('Success'),
      () => console.log('Error'),
    );
  }

  onSignOutClick = () => {
    this.props.signOut();
    localStorage.removeItem('accessToken');
    this.props.history.push('/');
  }

  render() {
    if (!this.props.repo) return null;
    return (
      <div>
        { this.props.repo.name }
        <button onClick={this.onSignOutClick}>Sign Out</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repo: state.main.currentRepo,
});

const mapDispatchToProps = dispatch => ({
  getRepo: (payload, onSuccess, onFail) => dispatch(getRepo(payload, onSuccess, onFail)),
  signOut: () => dispatch(signOut()),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RepositoryPage),
);
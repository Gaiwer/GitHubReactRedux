import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { searchRepos } from '../../../actions/mainActions';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  onSearch = (e) => {
    this.setState({ searchValue: e.target.value });
    if (e.target.value.length > 2) {
      this.props.searchRepos(e.target.value);
    }
  }

  onRepoClick = (repoName) => {
    this.props.history.push(
      `/repository/${this.state.searchValue}/${repoName}`
    );
  }

  render() {
    const { searchValue } = this.state;
    const { repos } = this.props;
    return (
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={this.onSearch}
        />
        {
          (repos && repos.length > 0) ?
            repos.map((item, idx) => (
              <div
                key={idx}
                onClick={() => this.onRepoClick(item.name)}
              >
                {item.name}
                <div>
                  {item.private ? 'Private' : 'Public'}
                </div>
              </div>
            )) :
            <div>Sorry no user found</div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  repos: state.main.repos,
});

const mapDispatchToProps = dispatch => ({
  searchRepos: (payload, onSuccess, onFail) => dispatch(searchRepos(payload, onSuccess, onFail)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchPage)
);

import { connect } from 'react-redux';
import { loadMoreRepos } from '../actions';
import Stars from './Stars';

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.username,
    repos: state.repos,
    isLoading: state.isLoading,
    avatarUrl: state.avatarUrl
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMoreRepos: (username) => {
      dispatch(loadMoreRepos(username));
    }
  }
};

const StarsContainer = connect(mapStateToProps, mapDispatchToProps)(Stars);

export default StarsContainer;
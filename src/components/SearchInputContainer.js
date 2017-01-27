import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import { cleanState, updateUsername, fetchRepos, fetchAvatar } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.username
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetSearch: () => {
      dispatch(cleanState());
    },
    updateUser: (value) => {
      dispatch(updateUsername(value));
    },
    onSearch: (username) => {
      dispatch(fetchRepos(username));
    },
    updateAvatar: (username) => {
      dispatch(fetchAvatar(username));
    }
  }
};

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);

export default SearchInputContainer;
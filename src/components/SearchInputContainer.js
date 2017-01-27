import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import { updateUsername, searchUser } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.username
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (value) => {
      dispatch(updateUsername(value));
    },
    onSearch: (username) => {
      dispatch(searchUser(username));
    }
  }
};

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);

export default SearchInputContainer;
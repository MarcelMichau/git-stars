import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import {
	cleanState,
	updateUsername,
	requestRepos,
	requestAvatar
} from '../actions';

const mapStateToProps = (state, ownProps) => ({
	username: state.username
});

const mapDispatchToProps = {
	resetSearch: cleanState,
	updateUser: updateUsername,
	onSearch: requestRepos,
	updateAvatar: requestAvatar
};

const SearchInputContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchInput);

export default SearchInputContainer;

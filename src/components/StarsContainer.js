import { connect } from 'react-redux';
import { loadMoreRepos } from '../actions';
import Stars from './Stars';

const mapStateToProps = (state, ownProps) => ({
	username: state.username,
	repos: state.repos,
	isLoading: state.isLoading,
	avatarUrl: state.avatarUrl
});

const mapDispatchToProps = {
	loadMoreRepos
};

const StarsContainer = connect(mapStateToProps, mapDispatchToProps)(Stars);

export default StarsContainer;

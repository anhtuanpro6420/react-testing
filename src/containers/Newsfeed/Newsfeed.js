import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { getPosts } from '../../../src/store/actions/newsfeedAction';
import './Newsfeed.scss';
import {
	getAuthToken,
	getCurrentUser,
	setAuth,
	setAuthToken
} from '../../core/services/storageService';
const { Content } = Layout;

class Newsfeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickedPost: null
		};
	}

	showMore = id => {
		this.setState({
			clickedPost: id
		});
	};

	componentDidMount() {
		const token = getAuthToken();
		const email = getCurrentUser();
		if (token && email) {
			setAuth(token, email);
			setAuthToken();
		}
		this.props.getPosts();
	}

	render() {
		return (
			<Content style={{ padding: '50px' }}>
				Hahahha Home page already
			</Content>
		);
	}
}

const mapStateToProps = state => ({
	success: state.newsfeed.success,
	errors: state.errors,
	isLoading: state.newsfeed.isLoading,
	data: state.newsfeed.data
});

const mapDispatchToProps = dispatch => {
	return {
		getPosts: () => dispatch(getPosts())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);

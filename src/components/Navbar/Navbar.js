import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './Navbar.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const { Header } = Layout;

const Navbar = props => {
	return (
		<Header>
			<div className="logo" />
			<Menu theme="dark" style={{ lineHeight: '64px' }} mode="horizontal">
				<Menu.Item key="home">
					<Link to="/home">Home</Link>
				</Menu.Item>
				{props.isAuthenticated && (
					<Menu.Item key="profile">
						<Link to="/profile">
							{props.user && props.user.email}
						</Link>
					</Menu.Item>
				)}
				{props.isAuthenticated ? (
					<Menu.Item key="logout">
						<Link to="/logout">Logout</Link>
					</Menu.Item>
				) : (
					<Menu.Item key="auth">
						<Link to="/auth">Login</Link>
					</Menu.Item>
				)}
			</Menu>
		</Header>
	);
};

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null,
		user: state.auth.user
	};
};

export default connect(mapStateToProps)(Navbar);

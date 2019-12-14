import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Icon, Input, Button, Checkbox, Form } from 'antd';
import FormHolder from '../../components/Form/Form';
import classes from './Auth.scss';
import * as actions from '../../store/actions/index';

const Auth = props => {
	// const [isSignup, setIsSignup] = useState(true);

	// const { buildingBurger, authRedirectPath, onSetAuthRedirectPath } = props;

	// useEffect(() => {
	// if (!buildingBurger && authRedirectPath !== "/") {
	//   onSetAuthRedirectPath();
	// }
	// }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath]);
	let authRedirect = null;
	if (props.isAuthenticated) {
		authRedirect = <Redirect to="/" />;
	}
	const submitHandler = data => {
		props.onAuth(data);
	};
	const { getFieldDecorator } = props.form;
	return (
		<div className={classes.Auth}>
			{authRedirect}
			<FormHolder {...props} onSubmit={submitHandler}>
				<Form.Item>
					{getFieldDecorator('email', {
						rules: [
							{
								required: true,
								message: 'Please input your email!'
							}
						]
					})(
						<Input
							prefix={
								<Icon
									type="user"
									style={{ color: 'rgba(0,0,0,.25)' }}
								/>
							}
							placeholder="Email"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: 'Please input your Password!'
							}
						]
					})(
						<Input
							prefix={
								<Icon
									type="lock"
									style={{ color: 'rgba(0,0,0,.25)' }}
								/>
							}
							type="password"
							placeholder="Password"
						/>
					)}
				</Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					className="login-form-button"
				>
					Log in
				</Button>
			</FormHolder>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuthenticated: state.auth.token !== null,
		authRedirectPath: state.auth.authRedirectPath,
		user: state.auth.user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAuth: data => dispatch(actions.auth(data)),
		onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form.create({ name: 'auth_form' })(Auth));

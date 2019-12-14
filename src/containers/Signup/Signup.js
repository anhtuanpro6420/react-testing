import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { register } from '../../store/actions/registerAction';
import { openNotification } from '../../components/Notification/notification';

class Signup extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.register(values);
			}
		});
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.success) {
			this.props.history.push('/auth/login');
		}
		if (nextProps.errors && nextProps.errors !== this.props.errors) {
			openNotification('error', nextProps.errors.message);
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="signup-form">
				<Form.Item>
					{getFieldDecorator('email', {
						rules: [
							{
								required: true,
								message: 'Please input your Email!'
							}
						]
					})(
						<Input
							type="email"
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
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="signup-form-button"
					>
						Register
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_signup' })(Signup);

const mapStateToProps = state => ({
	success: state.register.success,
	errors: state.errors,
	isLoading: state.register.isLoading,
	data: state.register.data
});

const mapDispatchToProps = dispatch => {
	return {
		register: userData => dispatch(register(userData))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(WrappedNormalLoginForm));

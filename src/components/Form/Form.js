import React from 'react';
import 'antd/dist/antd.css';
import './Form.css';
import { Form } from 'antd';

const NormalForm = props => {
	const handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};
	return (
		<Form onSubmit={handleSubmit} className="normal-form">
			{props.children}
		</Form>
	);
};

const WrappedNormalForm = Form.create({ name: 'normal_form' })(NormalForm);

export default WrappedNormalForm;

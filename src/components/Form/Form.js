import React from "react";
import "antd/dist/antd.css";
import "./Form.css";
import { Form } from "antd";

const NormalForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.onSubmit(values);
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit} className="normal-form">
      {props.children}
    </Form>
  );
};

const WrappedNormalForm = Form.create({ name: "normal_form" })(NormalForm);

export default WrappedNormalForm;

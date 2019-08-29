import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Input, Icon, Form, Checkbox } from "antd";
import styles from "./index.module.less";
import logo from "../../../logo.svg";

class NormalLoginForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        this.props.history.push("/");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.layoutContainer}>
        <div className={styles.formContainer}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="logo" />
            <h2>Ant Design</h2>
          </div>

          <Form onSubmit={this.handleSubmit} className={styles["login-form"]}>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "请输入用户名!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                  size="large"
                  allowClear={true}
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入密码!" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  size="large"
                  allowClear={true}
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>记住我</Checkbox>)}
              <Button
                type="primary"
                htmlType="submit"
                className={styles["submit-button"]}
                size="large"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);
export default withRouter(WrappedNormalLoginForm);

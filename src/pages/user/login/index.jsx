import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

class Login extends Component {
  render() {
    return (
      <>
        <p>login22</p>
        <Link to="/">
          <Button>登录</Button>
        </Link>
      </>
    );
  }
}

export default Login;

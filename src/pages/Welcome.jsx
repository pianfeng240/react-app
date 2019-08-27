import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <>
        <p>Welcome</p>
        <Link to="/login">
          <Button type="primary">退出登录</Button>
        </Link>
      </>
    );
  }
}

export default Welcome;

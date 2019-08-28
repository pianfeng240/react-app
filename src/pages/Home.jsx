import React, { Component } from "react";
import { Layout, Menu, Icon, Breadcrumb, Avatar, Badge } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./home.module.less";
import logo from "../logo.svg";
import RightContent from "../components/GlobalHeader/RigthContent";

import Welcome from "./Welcome";
import BasicForm from "./demo/form/BasicForm";
import StepForm from "./demo/form/StepForm";
import AdvancedForm from "./demo/form/AdvancedForm";
// import { Link } from "react-router-dom";
// import { timingSafeEqual } from "crypto";

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={250}
        >
          <div className={styles.logo}>
            <img className={styles.logo.img} src={logo} alt="logo" />
            <h1 styles={styles.logo.h1}>Ant Design</h1>
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="2"
              title={
                <span>
                  <Icon type="book" />
                  <span>Demo页</span>
                </span>
              }
            >
              <Menu.Item key="2_1">
                <Link to="/form/basic">
                  <span>基础表单</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2_2">
                <Link to="/form/step">
                  <span>分布表单</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2_3">
                <Link to="/form/advanced">
                  <span>高级表单</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="3"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3_1">Tom</Menu.Item>
              <Menu.Item key="3_2">Bill</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <RightContent />
          </Header>

          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="#">首页2</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="#">列表页</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>标准页</Breadcrumb.Item>
          </Breadcrumb>

          <Content className={styles.content}>
            <Route exact path="/" component={Welcome}></Route>
            <Route exact path="/form/basic" component={BasicForm}></Route>
            <Route exact path="/form/step" component={StepForm}></Route>
            <Route exact path="/form/advanced" component={AdvancedForm}></Route>
          </Content>
          <Footer className={styles.footer}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;

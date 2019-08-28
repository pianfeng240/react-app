import React, { Component } from "react";
import { Dropdown, Menu, Icon, Avatar } from "antd";
import { withRouter } from "react-router-dom";
import styles from "./index.module.less";

class AvatarDropDown extends Component {
  onMenuClick = event => {
    const { key } = event;
    console.log(key);
    if (key === "logout") {
      this.props.history.replace("/login");
    }
  };

  render() {
    const {
      currentUser = {
        avatar: "",
        name: ""
      },
      menu
    } = this.props;
    currentUser.name = "测试用户";
    console.log(2, menu);

    const menuDropDown = (
      <Menu
        className={styles.menu}
        selectedKeys={[]}
        onClick={this.onMenuClick}
      >
        <Menu.Item key="center">
          <Icon type="user" />
          个人中心
        </Menu.Item>
        <Menu.Item key="settings">
          <Icon type="setting" />
          个人设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <div className={styles.avatarDropDown}>
        <Dropdown overlay={menuDropDown} trigger={["hover"]}>
          <div>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon="user"
              size="small"
            />
            <span className={styles.username}>{currentUser.name}</span>
          </div>
        </Dropdown>
      </div>
    );
  }
}

export default withRouter(AvatarDropDown);

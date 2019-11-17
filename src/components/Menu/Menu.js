import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './Menu.css';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const Nav = props => {
  const [current, setCurrent] = useState('mail');

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home">
        <Link to="/home">Home</Link>
      </Menu.Item>
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            Navigation Three - Submenu
          </span>
        }
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

      {props.isAuthenticated ? (
        <Menu.Item key="userName">
          <Link to="/profile">{props.user && props.user.email}</Link>
        </Menu.Item>
      ) : (
        // <Menu.Item key="logout">
        //   <Link to="/logout">Logout</Link>
        // </Menu.Item>
        <Menu.Item key="login">
          <Link to="/auth">Login</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Nav;

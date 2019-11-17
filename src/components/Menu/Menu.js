import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './Menu.css';
import { Menu, Icon, Button } from 'antd';
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

      {props.isAuthenticated ? (
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              {props.user && props.user.email}
            </span>
          }
        >
          <Menu.Item key="logout">
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </SubMenu>
      ) : (
        <Menu.Item key="login">
          <Link to="/auth">Login</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Nav;

import React, { useEffect } from "react";
import { useState } from "react";
import {
  UserOutlined,
} from "@ant-design/icons";
import "./Sidebar.css"
import { Button, Col, Menu } from "antd";
import { FaEye } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaRegRectangleList } from "react-icons/fa6";

const Sidebar =  () => {
  const [dark, setDark] = useState(true);
  const {pathname} =  useLocation();
  const toggleColor = () => {
    setDark(!dark);
  };

  return (
    <div>
      {/* Button for changing the color theme */}
      {/* <Button
        type="primary"
        onClick={toggleColor}
        style={{
          marginBottom: 16,
        }}
      >
        {dark ? <SunOutlined /> : <MoonOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={[pathname]}
        mode="inline"
        theme={dark ? "dark" : "light"}
        inlineCollapsed={true}
        backgroundColor="#F6B846"
      >
        <Menu.Item key={"/"} icon={<UserOutlined className="menu-icon" />}>
          <Link to="/">About</Link>
        </Menu.Item>
        <Menu.Item key={"/resume"} icon={<FaRegRectangleList className="menu-icon" />}>
          <Link to="/resume">Resume</Link>
        </Menu.Item>
        <Menu.Item key={"/work"} className="menu" icon={<FaEye />}>
          <Link to="/work">Work</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Sidebar;

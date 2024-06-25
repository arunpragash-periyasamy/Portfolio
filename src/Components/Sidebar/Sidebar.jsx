import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import "./Sidebar.css";
import { Menu } from "antd";
import { FaEye } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaRegRectangleList } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

const Sidebar = () => {
  const { pathname } = useLocation();


  return (
    <div>
      <Menu
        defaultSelectedKeys={[pathname]}
        mode="inline"
        theme={"dark"}
        inlineCollapsed={true}
        className="vertical-menu"
      >
        <Menu.Item key={"/"} icon={<UserOutlined className="menu-icon" />}>
          <Link to="/">About</Link>
        </Menu.Item>
        <Menu.Item
          key={"/resume"}
          icon={<FaRegRectangleList className="menu-icon" />}
        >
          <Link to="/resume">Resume</Link>
        </Menu.Item>
        <Menu.Item key={"/work"} className="menu" icon={<FaEye />}>
          <Link to="/work">Work</Link>
        </Menu.Item>
        <Menu.Item key={"/blog"} className="menu" icon={<IoBookOutline />}>
          <Link to="/blog">Blog</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;

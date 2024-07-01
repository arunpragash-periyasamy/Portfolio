import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  CalendarOutlined,
  PlusOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FaRegRectangleList } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";

const { Item } = Menu;

const Navbar = () => {

  const { pathname } = useLocation();
  return (
    <div className="navbar-container">
      <Menu
        mode="horizontal"
        defaultSelectedKeys={[pathname]}
        className="navbar"
      >
       
        <Item key={"/"} icon={<UserOutlined className="menu-icon" />}>
          <Link to="/"></Link>
        </Item>
        <Item
          key={"/resume"}
          icon={<FaRegRectangleList className="menu-icon" />}
        >
          <Link to="/resume"></Link>
        </Item>
        <Item key={"/work"} className="menu" icon={<FaEye />}>
          <Link to="/work"></Link>
        </Item>
        <Item key={"/blog"} className="menu" icon={<IoBookOutline />}>
          <Link to="/blog"></Link>
        </Item>
      </Menu>
    </div>
  );
};

export default Navbar;

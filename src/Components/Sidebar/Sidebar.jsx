import React from "react";
import { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Sidebar.css"
import { Button, Col, Menu, Row } from "antd";
import { FaNetworkWired, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Option 1",
  },
  {
    key: "2",
    icon: <DesktopOutlined />,
    label: "Option 2",
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "Option 3",
  },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
  },
];
const Sidebar = () => {
  const [dark, setDark] = useState(true);
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
        defaultSelectedKeys={["About"]}
        mode="inline"
        theme={dark ? "dark" : "light"}
        inlineCollapsed={true}
        backgroundColor="#F6B846"
      >
        <Menu.Item key={"About"} icon={<UserOutlined className="menu-icon" />}>
          <Link to="/">
          About
          </Link>
        </Menu.Item>
        <Menu.Item key={"work"} className="menu" icon={<FaEye />}>
          <Link to="/work">
            Work
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Sidebar;

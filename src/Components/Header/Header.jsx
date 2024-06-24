import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { FaEye, FaRegRectangleList } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { Header } = Layout;
  const { pathname } = useLocation();

  return (
    <Header className="custom-header">
      <Menu
        mode="horizontal"
        theme="dark"
        className="horizontal-menu"
        defaultSelectedKeys={[pathname]}
      >
        <Menu.Item key="/" icon={<UserOutlined className="menu-icon" />}>
          <Link to="/">About</Link>
        </Menu.Item>
        <Menu.Item
          key="/resume"
          icon={<FaRegRectangleList className="menu-icon" />}
        >
          <Link to="/resume">Resume</Link>
        </Menu.Item>
        <Menu.Item key="/work" icon={<FaEye className="menu-icon" />}>
          <Link to="/work">Work</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Header;

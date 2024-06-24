import React from "react";
import { Card, Avatar, Typography, Button, Space } from "antd";
import { TypeAnimation } from "react-type-animation";

import { TbBrandLeetcode } from "react-icons/tb";

import {
  DownloadOutlined,
  MailOutlined,
  TwitterOutlined,
  GithubOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Mountain from "../../assets/Mountain.webp";
import ProfileCrop from "../../assets/profile.png";
const { Title } = Typography;
import Resume from "../../assets/resume.pdf";
import { FaLinkedinIn } from "react-icons/fa6";
const ProfileCard = () => {
  return (
    <Card
      style={{
        textAlign: "center",
        backgroundColor: "#222222",
        boxShadow: "-10px -10px 5px rgba(247, 180, 56, 0.41)",
      }}
      cover={
        <img
          alt="background"
          src={Mountain} // Replace with your background image URL
        />
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginTop: "-150px",
        }}
      >
        <Avatar
          // size={{ xs: 120, sm: 150, md: 200, lg: 400, xl: 400, xxl: 200 }}
          size={{ xs: 200, sm: 200, md: 150, lg: 150, xl: 200, xxl: 200 }}
          src={ProfileCrop} // Replace with your avatar image URL
          style={{
            border: "2px solid white",
          }}
        />
      </div>
      <Title level={3} style={{ marginTop: 10, color: "#E9E9E9" }}>
        Arunpragash
      </Title>
      <div>
        <TypeAnimation
          sequence={[
            "Front End Developer",
            1500,
            "Back End Developer",
            1500,
            "Full Stack Developer",
            1500,
          ]}
          wrapper="span"
          speed={50}
          style={{ color: "#F6B846", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <Space
        size="middle"
        style={{
          marginTop: 20,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          shape="circle"
          icon={<TbBrandLeetcode />}
          href="https://leetcode.com/u/aparunpragash/"
          target="_blank"
        />
        <Button
          shape="circle"
          icon={<GithubOutlined />}
          href="https://github.com/arunpragash-periyasamy"
          target="_blank"
        />
        <Button
          shape="circle"
          icon={<FaLinkedinIn />}
          href="www.linkedin.com/in/arunpragashap"
          target="_blank"
        />
        <Button
          shape="circle"
          icon={<WhatsAppOutlined />}
          href="https://wa.me/+916382868122"
          target="_blank"
        />
      </Space>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: 20,
          paddingBottom: 20,
          flexWrap: "wrap",
        }}
      >
        <Button
          className="btn-link"
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          href={Resume}
          target="_blank"
          style={{ borderRadius: 50 }}
        >
          DOWNLOAD CV
        </Button>
        <Button
          className="btn-link"
          type="default"
          icon={<MailOutlined />}
          size="large"
          href="mailto:aparunpragash@gmail.com"
          target="_blank"
          style={{ borderRadius: 50 }}
        >
          CONTACT ME
        </Button>
      </div>
    </Card>
  );
};

export default ProfileCard;

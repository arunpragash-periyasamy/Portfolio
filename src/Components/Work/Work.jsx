import { Card, Col, Flex, Row, Typography } from "antd";
import React from "react";
import Ecommerce from "../../assets/Ecommerce.png";
import Hostel from "../../assets/Hostel.png";
import TrainTicket from "../../assets/TrainTicket.webp";
import Vercel from "../../assets/VercelDeployment.jpeg";
const { Title } = Typography;
const Work = () => {
  return (
    <Card style={{ padding: "20px", width: "100vw" }}>
      <div style={{ textAlign: "left" }}>
        <Title className="title">Work</Title>
      </div>
      <Row justify="space-evenly" gutter={[16, 16]}>
        <a href="https://guvi-ecommerce.netlify.app/" target="_blank">
          <Card
            title="Ecommerce Website in MERN"
            cover={<img alt="Ecommerce Website" src={Ecommerce} />}
            style={{
              width: 300,
            }}
          >
            <p>
              Ecommerce Website developed using React js, Mongodb, Node js,
              Express js and fakestore api for products.
            </p>
            {/* <div className="d-flex justify-content-between"></div> */}
          </Card>
        </a>

        <a
          href="https://github.com/arunpragash-periyasamy/hostel-management"
          target="_blank"
        >
          <Card
            title="Hostel Management System with PHP MySQL"
            cover={<img alt="Hostel Management" src={Hostel} />}
            style={{
              width: 300,
            }}
          >
            <p>
              Hostel Management system is developed for the students can book
              the hostel room through online. This application is developed
              using PHP, MySQL
            </p>
          </Card>
        </a>
        <a
          href="https://github.com/arunpragash-periyasamy/Train_ticket_booking"
          target="_blank"
        >
          <Card
            title="Train Ticket Booking in Java"
            cover={<img alt="Hostel Management" src={TrainTicket} />}
            style={{
              width: 300,
            }}
          >
            <p>Java application for train ticket booking management.</p>
          </Card>
        </a>
        <a
          href="https://github.com/arunpragash-periyasamy/Train_ticket_booking"
          target="_blank"
        >
          <Card
            title="Nodejs Deployment using Vercel"
            cover={<img alt="Node js deployment" src={Vercel} />}
            style={{
              width: 300,
            }}
          >
            <p>Deploying a basic node js application in the vercel</p>
          </Card>
        </a>
        <a
          href="https://arunpragash-periyasamy.github.io/e-commerce_landing_page//"
          target="_blank"
        >
          <Card
            title="Ecommerce landing page in HTML, CSS, Bootstrap, JS"
            cover={<img alt="Ecommerce Website" src={Ecommerce} />}
            style={{
              width: 300,
            }}
          >
            <p>
              Ecommerce Website developed using HTML, CSS, Bootstrap, JS and fakestore api for products.
            </p>
            {/* <div className="d-flex justify-content-between"></div> */}
          </Card>
        </a>
      </Row>
    </Card>
  );
};

export default Work;

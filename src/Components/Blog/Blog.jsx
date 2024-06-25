import { Card, Col, Flex, Row, Typography } from "antd";
import React from "react";
import MySQL from "../../assets/MySQLInstall.jpeg";
import ApachePHP from "../../assets/ApachePHP.jpeg";
import GitTutorial from "../../assets/GitTutorial.png";
import AWSIAM from "../../assets/AWSIAM.jpeg";
import JAVA from "../../assets/JAVA.jpeg";
const { Title } = Typography;
const Blog = () => {
  return (
    <Card style={{ padding: "20px", width: "100vw" }}>
      <div style={{ textAlign: "left" }}>
        <Title className="title">Blog</Title>
      </div>
      <Row justify="space-evenly" gutter={[16, 16]}>
        <a
          href="https://medium.com/@arunpragashap/iam-in-aws-how-to-create-users-in-iam-how-to-create-policies-in-iam-8256e9b5e7d8"
          target="_blank"
        >
          <Card
            title="Create User in AWS IAM"
            cover={<img alt="AWS IAM" src={AWSIAM} />}
            style={{
              width: 300,
            }}
          >
            <p>Blog about creatig user in the AWS IAM.</p>
            {/* <div className="d-flex justify-content-between"></div> */}
          </Card>
        </a>

        <a
          href="https://medium.com/@arunpragashap/install-mysql-in-ubuntu-or-debian-based-linux-15af2751650c"
          target="_blank"
        >
          <Card
            title="Installing MySQL in Ubuntu"
            cover={<img alt="MySQL Installation" src={MySQL} />}
            style={{
              width: 300,
            }}
          >
            <p>Install MySQL Server in the ubuntu linux distro.</p>
          </Card>
        </a>
        <a
          href="https://medium.com/@arunpragashap/install-apache-server-in-ubuntu-and-run-a-php-file-7e5630376e96"
          target="_blank"
        >
          <Card
            title="Installing Apache Server"
            cover={<img alt="Apache Server" src={ApachePHP} />}
            style={{
              width: 300,
            }}
          >
            <p>
              Installing Apache Server and run a PHP file in the ubuntu linux
              distro.
            </p>
          </Card>
        </a>
        <a
          href="https://medium.com/@arunpragashap/git-tutorial-in-linux-terminal-7e2ace6d4b0e"
          target="_blank"
        >
          <Card
            title="Git tutorial"
            cover={<img alt="Git Tutorial" src={GitTutorial} />}
            style={{
              width: 300,
            }}
          >
            <p>Git commands tutorial performed in the ubuntu linux.</p>
          </Card>
        </a>
        <a
          href="https://medium.com/@arunpragashap/introduction-to-java-and-its-architecture-331e1e6e68d3"
          target="_blank"
        >
          <Card
            title="Java Architecture"
            cover={<img alt="Java Architecture" src={JAVA} />}
            style={{
              width: 300,
            }}
          >
            <p>
              Explaining the java architcture basics.
            </p>
            {/* <div className="d-flex justify-content-between"></div> */}
          </Card>
        </a>
      </Row>
    </Card>
  );
};

export default Blog;

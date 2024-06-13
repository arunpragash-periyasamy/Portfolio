import React, { useState } from "react";
import {
  Layout,
  Menu,
  Input,
  Select,
  Button,
  Radio,
  Form,
  Row,
  Col,
  message,
} from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  FileOutlined,
  ShoppingCartOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import "./NewProductForm.css"

const { Header, Content, Sider } = Layout;
const { Option } = Select;
const { TextArea } = Input;
const { Item } = Form;
const { Group } = Radio;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const NewProductForm = () => {
  const [form] = Form.useForm();
  const [productType, setProductType] = useState("single");

  const handleProductTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const handleSubmit = (values) => {
    console.log("success!", values);
    message.success("Product created successfully!");
  };

  const generateCode = () => {
    // Logic to generate unique code
    message.info("Code generated successfully!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout className="product-layout">
      <Header className="header">
        <div className="logo">
          <img
            src="https://www.dreamstime.com/stock-illustration-abstract-logo-design-letter-d-and-dream-word-concept-icon-vector-image174949024"
            alt="Logo"
          />
          <span>POS</span>
        </div>
        <div className="header-right">
          <Input.Search
            placeholder="Search"
            enterButton
            style={{ width: 200 }}
          />
          <div className="header-buttons">
            <Select defaultValue="Select Store">
              <Option value="store1">Store 1</Option>
              <Option value="store2">Store 2</Option>
            </Select>
            <a href="#" className="header-button">
              <img
                src="https://www.flaticon.com/free-icons/united-states"
                alt="Flag"
              />
            </a>
            <a href="#" className="header-button">
              <img
                src="https://www.flaticon.com/free-icons/email"
                alt="Email"
              />
            </a>
            <a href="#" className="header-button">
              <span className="header-button-count">1</span>
            </a>
            <a href="#" className="header-button">
              <span className="header-button-count">2</span>
            </a>
            <a href="#" className="header-button">
              <img
                src="https://www.flaticon.com/free-icons/settings"
                alt="Settings"
              />
            </a>
            <div className="header-user">
              <img src="https://www.flaticon.com/free-icons/user" alt="User" />
              <span>John Smilga</span>
              <span>Super Admin</span>
            </div>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider className="sider">
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Main
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
              Application
            </Menu.Item>
            <Menu.SubMenu
              key="sub1"
              icon={<ShoppingCartOutlined />}
              title="Inventory"
            >
              <Menu.Item key="4">Products</Menu.Item>
              <Menu.Item key="5" style={{ color: "orange" }}>
                Create Product
              </Menu.Item>
              <Menu.Item key="6">Expired Products</Menu.Item>
              <Menu.Item key="7">Low Stocks</Menu.Item>
              <Menu.Item key="8">Category</Menu.Item>
              <Menu.Item key="9">Sub Category</Menu.Item>
              <Menu.Item key="10">Brands</Menu.Item>
              <Menu.Item key="11">Units</Menu.Item>
              <Menu.Item key="12">Variant Attributes</Menu.Item>
              <Menu.Item key="13">Warranties</Menu.Item>
              <Menu.Item key="14">Print Barcode</Menu.Item>
              <Menu.Item key="15">Print QR Code</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="sub2"
              icon={<DollarCircleOutlined />}
              title="Stock"
            >
              <Menu.Item key="16">Manage Stock</Menu.Item>
              <Menu.Item key="17">Stock Adjustment</Menu.Item>
              <Menu.Item key="18">Stock Transfer</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="sub3"
              icon={<DollarCircleOutlined />}
              title="Sales"
            >
              <Menu.Item key="19">Sales</Menu.Item>
              <Menu.Item key="20">Invoices</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Content className="content">
          <Form
            {...formItemLayout}
            form={form}
            name="new-product"
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ padding: 24 }}
          >
            <Form.Item
              label="Product Information"
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              <span style={{ color: "orange", fontSize: "1.1rem" }}>
                &#128221;
              </span>
            </Form.Item>

            <Form.Item
              name="store"
              label="Store"
              rules={[
                {
                  required: true,
                  message: "Please select a store!",
                },
              ]}
            >
              <Select placeholder="Choose">
                <Option value="store1">Store 1</Option>
                <Option value="store2">Store 2</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="warehouse"
              label="Warehouse"
              rules={[
                {
                  required: true,
                  message: "Please select a warehouse!",
                },
              ]}
            >
              <Select placeholder="Choose">
                <Option value="warehouse1">Warehouse 1</Option>
                <Option value="warehouse2">Warehouse 2</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="productName"
              label="Product Name"
              rules={[
                {
                  required: true,
                  message: "Please input product name!",
                },
              ]}
            >
              <Input placeholder="Product Name" />
            </Form.Item>

            <Form.Item
              name="slug"
              label="Slug"
              rules={[
                {
                  required: true,
                  message: "Please input slug!",
                },
              ]}
            >
              <Input placeholder="Slug" />
            </Form.Item>

            <Form.Item name="category" label="Category">
              <Select placeholder="Choose" showSearch>
                <Option value="category1">Category 1</Option>
                <Option value="category2">Category 2</Option>
                <Option value="category3">Category 3</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="subCategory"
              label="Sub Category"
              rules={[
                {
                  required: true,
                  message: "Please select a sub-category!",
                },
              ]}
            >
              <Select placeholder="Choose">
                <Option value="subCategory1">Sub Category 1</Option>
                <Option value="subCategory2">Sub Category 2</Option>
                <Option value="subCategory3">Sub Category 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="brand" label="Brand">
              <Select placeholder="Choose" showSearch>
                <Option value="brand1">Brand 1</Option>
                <Option value="brand2">Brand 2</Option>
                <Option value="brand3">Brand 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="unit" label="Unit">
              <Select placeholder="Choose" showSearch>
                <Option value="unit1">Unit 1</Option>
                <Option value="unit2">Unit 2</Option>
                <Option value="unit3">Unit 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="barcodeSymbology" label="Barcode Symbology">
              <Select placeholder="Choose" showSearch>
                <Option value="symbology1">Symbology 1</Option>
                <Option value="symbology2">Symbology 2</Option>
                <Option value="symbology3">Symbology 3</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="sku"
              label="SKU"
              rules={[
                {
                  required: true,
                  message: "Please input SKU!",
                },
              ]}
            >
              <Input placeholder="Enter SKU" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" onClick={generateCode}>
                Generate Code
              </Button>
            </Form.Item>

            <Form.Item name="subSubCategory" label="Sub Sub Category">
              <Select placeholder="Choose" showSearch>
                <Option value="subSubCategory1">Sub Sub Category 1</Option>
                <Option value="subSubCategory2">Sub Sub Category 2</Option>
                <Option value="subSubCategory3">Sub Sub Category 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="sellingType" label="Selling Type">
              <Select placeholder="Choose" showSearch>
                <Option value="sellingType1">Selling Type 1</Option>
                <Option value="sellingType2">Selling Type 2</Option>
                <Option value="sellingType3">Selling Type 3</Option>
              </Select>
            </Form.Item>

            <Form.Item name="itemCode" label="Item Code">
              <Input placeholder="Please Enter Item Code" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" onClick={generateCode}>
                Generate Code
              </Button>
            </Form.Item>

            <Form.Item name="description" label="Description">
              <TextArea placeholder="Description" autoSize={{ minRows: 4 }} />
            </Form.Item>

            <Form.Item
              label="Pricing & Stocks"
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              <span style={{ color: "orange", fontSize: "1.1rem" }}>
                &#128221;
              </span>
            </Form.Item>

            <Form.Item name="productType" label="Product Type">
              <Group onChange={handleProductTypeChange} value={productType}>
                <Item value="single">Single Product</Item>
                <Item value="variable">Variable Product</Item>
              </Group>
            </Form.Item>

            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: "Please input quantity!",
                },
              ]}
            >
              <Input type="number" placeholder="Quantity" />
            </Form.Item>

            <Form.Item name="price" label="Price">
              <Input type="number" placeholder="Price" />
            </Form.Item>

            <Form.Item name="taxType" label="Tax Type">
              <Select placeholder="Select Option" showSearch>
                <Option value="taxType1">Tax Type 1</Option>
                <Option value="taxType2">Tax Type 2</Option>
                <Option value="taxType3">Tax Type 3</Option>
              </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Create Product
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
};

export default NewProductForm;

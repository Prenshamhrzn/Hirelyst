import React, { useState } from "react";
import { Layout, Menu, Form, Input, Button, Table, message } from "antd";
import {
  PlusOutlined,
  HomeOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import axios from "axios";
import "../../css/Dashboard.css";

const { Header, Sider, Content } = Layout;

const EmployerDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [form] = Form.useForm();

  const onAddVacancy = async (values) => {
    try {
      // Send to admin endpoint
      await axios.post("http://localhost:5000/api/vacancies", values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setVacancies([...vacancies, values]);
      message.success("Vacancy submitted to admin for approval!");
      form.resetFields();
    } catch (err) {
      message.error("Error posting vacancy.");
    }
  };

  const columns = [
    { title: "Job Title", dataIndex: "title" },
    { title: "Location", dataIndex: "location" },
    { title: "Salary", dataIndex: "salary" },
    { title: "Status", dataIndex: "status", render: () => "Pending Approval" },
  ];

  return (
    <Layout className="dashboard-layout">
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">Hirelyst</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Overview
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            Vacancies
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="dashboard-header">Employer Dashboard</Header>
        <Content className="dashboard-content">
          <h2 className="green-text">Post a New Vacancy</h2>
          <Form
            form={form}
            layout="vertical"
            className="vacancy-form"
            onFinish={onAddVacancy}
          >
            <Form.Item
              name="title"
              label="Job Title"
              rules={[{ required: true, message: "Job Title required" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true, message: "Location required" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="salary" label="Salary">
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea rows={4} />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<PlusOutlined />}
              className="green-btn"
            >
              Submit to Admin
            </Button>
          </Form>

          <h2 className="green-text mt-6">Your Vacancies</h2>
          <Table columns={columns} dataSource={vacancies} rowKey="title" />
        </Content>
      </Layout>
    </Layout>
  );
};

export default EmployerDashboard;

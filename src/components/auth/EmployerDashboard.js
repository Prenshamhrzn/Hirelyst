import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Form,
  Input,
  Button,
  Table,
  Select,
  message,
  Typography,
  DatePicker,
} from "antd";
import {
  PlusOutlined,
  HomeOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import axios from "axios";
import "../../css/EmployerDashboard.css";

const { Header, Sider, Content } = Layout;
const { Option } = Select;
const { Title } = Typography;

const EmployerDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/vacancies",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setVacancies(response.data);
      } catch (error) {
        message.error("Failed to load vacancies.");
      }
    };

    fetchVacancies();
  }, []);

  const onAddVacancy = async (values) => {
    setLoading(true);
    try {
      const formattedValues = {
        ...values,
        expiryDate: values.expiryDate.format("YYYY-MM-DD"),
      };

      const response = await axios.post(
        "http://localhost:5000/api/vacancies",
        formattedValues,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setVacancies([
        ...vacancies,
        { ...formattedValues, status: "Pending Approval" },
      ]);
      message.success("Vacancy submitted to admin for approval!");
      form.resetFields();
    } catch (err) {
      message.error("Error posting vacancy. Try again.");
    }
    setLoading(false);
  };

  const columns = [
    { title: "Job Title", dataIndex: "title", key: "title" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Job Type", dataIndex: "jobType", key: "jobType" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Qualification",
      dataIndex: "qualification",
      key: "qualification",
    },
    { title: "Salary", dataIndex: "salary", key: "salary" },
    { title: "Expiry Date", dataIndex: "expiryDate", key: "expiryDate" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span className={`status-badge ${status?.toLowerCase()}`}>
          {status}
        </span>
      ),
    },
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
        <Header
          className="dashboard-header"
          style={{ position: "sticky", top: 0, zIndex: 10 }}
        >
          Employer Dashboard
        </Header>
        <Content className="dashboard-content">
          <div className="form-wrapper">
            <Title level={3} className="green-text">
              Post a New Vacancy
            </Title>
            <Form
              form={form}
              layout="vertical"
              className="vacancy-form"
              onFinish={onAddVacancy}
            >
              <Form.Item
                name="title"
                label="Job Title"
                rules={[{ required: true, message: "Please enter job title" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="location"
                label="Location"
                rules={[
                  { required: true, message: "Please enter job location" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="jobType"
                label="Job Type"
                rules={[{ required: true, message: "Please select job type" }]}
              >
                <Select placeholder="Select job type">
                  <Option value="Full-time">Full-time</Option>
                  <Option value="Part-time">Part-time</Option>
                  <Option value="Contract">Contract</Option>
                  <Option value="Internship">Internship</Option>
                  <Option value="Remote">Remote</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="category"
                label="Category"
                rules={[
                  { required: true, message: "Please select a category" },
                ]}
              >
                <Select placeholder="Select category">
                  <Option value="IT">IT</Option>
                  <Option value="Marketing">Marketing</Option>
                  <Option value="Sales">Sales</Option>
                  <Option value="Finance">Finance</Option>
                  <Option value="Education">Education</Option>
                  <Option value="Healthcare">Healthcare</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="qualification"
                label="Qualification"
                rules={[
                  { required: true, message: "Please enter qualification" },
                ]}
              >
                <Input placeholder="e.g., Bachelor's Degree" />
              </Form.Item>

              <Form.Item
                name="expiryDate"
                label="Expiry Date"
                rules={[
                  { required: true, message: "Please select expiry date" },
                ]}
              >
                <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item name="salary" label="Salary Range">
                <Input placeholder="e.g., Rs.10,000 - Rs.15,000/month" />
              </Form.Item>

              <Form.Item
                name="description"
                label="Job Description"
                rules={[{ required: true, message: "Description required" }]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                icon={<PlusOutlined />}
                loading={loading}
                className="green-btn"
              >
                Submit to Admin
              </Button>
            </Form>
          </div>

          <Title level={3} className="green-text" style={{ marginTop: "60px" }}>
            Your Vacancies
          </Title>
          <Table
            columns={columns}
            dataSource={vacancies}
            rowKey={(record) => record.title + record.location}
            pagination={{ pageSize: 5 }}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default EmployerDashboard;

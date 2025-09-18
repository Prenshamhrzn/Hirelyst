import React from "react";
import { Form, Input, Button, Select, message, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/Auth.css";

const { Option } = Select;
const { Title, Text } = Typography;

const ProviderRegistration = ({ onComplete, onBack }) => {
  const [companyRegisterForm] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    if (values.password !== values.confirmPassword) {
      message.error("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/employers/registerEmployer",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      // ✅ store token with same key used in EmployerDashboard.js
      localStorage.setItem("token", data.token);

      message.success("Registration successful!");
      navigate("/employer-dashboard");
    } catch (err) {
      console.error("Axios error:", err);
      const errorMsg =
        err.response?.data?.message || "Server error. Please try again later.";
      message.error(errorMsg);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <Title level={2}>Company Registration</Title>
        <Form
          form={companyRegisterForm}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            industry: "",
            companySize: "",
          }}
        >
          <Form.Item
            name="companyName"
            label="Company Name*"
            rules={[{ required: true, message: "Company name is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email*"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="contactPerson"
            label="Contact Person*"
            rules={[{ required: true, message: "Contact person is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number">
            <Input />
          </Form.Item>

          <Form.Item
            name="industry"
            label="Industry*"
            rules={[{ required: true, message: "Industry is required" }]}
          >
            <Select placeholder="Select Industry" showSearch>
              <Option value="Technology">Technology</Option>
              <Option value="Finance">Finance</Option>
              <Option value="Healthcare">Healthcare</Option>
              <Option value="Education">Education</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="companySize"
            label="Company Size*"
            rules={[{ required: true, message: "Company size is required" }]}
          >
            <Select placeholder="Select Company Size" showSearch>
              <Option value="1-10">1-10 employees</Option>
              <Option value="11-50">11-50 employees</Option>
              <Option value="51-200">51-200 employees</Option>
              <Option value="201-500">201-500 employees</Option>
              <Option value="501+">501+ employees</Option>
            </Select>
          </Form.Item>

          <Form.Item name="website" label="Website">
            <Input placeholder="https://example.com" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password*"
            rules={[
              { required: true, message: "Password is required" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password*"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register Company
            </Button>
          </Form.Item>

          <Text>
            Already have an account?{" "}
            <a onClick={onBack || (() => navigate("/loginPage"))}>Login</a>
          </Text>
        </Form>
      </div>
    </div>
  );
};

export default ProviderRegistration;

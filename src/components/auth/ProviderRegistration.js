import React from "react";
import { Form, Input, Button, Select, message, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/Auth.css";

const { Option } = Select;
const { Title, Text } = Typography;

const ProviderRegistration = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    if (values.password !== values.confirmPassword) {
      message.error("Passwords do not match.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/employers/registerEmployer",
        values,
        { headers: { "Content-Type": "application/json" } }
      );

      // Store token for dashboard access
      localStorage.setItem("token", data.token);
      message.success("Registration successful!");
      navigate("/employer-dashboard");
    } catch (err) {
      console.error(err);
      message.error(
        err.response?.data?.message || "Server error. Please try again."
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <Title level={2} className="green-text">
          Company Registration
        </Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ industry: "", companySize: "" }}
        >
          <Form.Item
            name="companyName"
            label="Company Name*"
            rules={[{ required: true, message: "Company name is required" }]}
          >
            <Input placeholder="e.g. Hivecraft Technology" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email*"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input placeholder="company@example.com" />
          </Form.Item>

          <Form.Item
            name="contactPerson"
            label="Contact Person*"
            rules={[{ required: true, message: "Contact person is required" }]}
          >
            <Input placeholder="Name of HR/Manager" />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number">
            <Input placeholder="+977-98XXXXXXXX" />
          </Form.Item>

          <Form.Item
            name="industry"
            label="Industry*"
            rules={[{ required: true, message: "Industry is required" }]}
          >
            <Select placeholder="Select Industry" showSearch>
              {[
                "Technology",
                "Finance",
                "Healthcare",
                "Education",
                "Other",
              ].map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="companySize"
            label="Company Size*"
            rules={[{ required: true, message: "Company size is required" }]}
          >
            <Select placeholder="Select Company Size" showSearch>
              {["1-10", "11-50", "51-200", "201-500", "501+"].map((size) => (
                <Option key={size} value={size}>
                  {size} employees
                </Option>
              ))}
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
            <Input.Password placeholder="Create a password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password*"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
            ]}
          >
            <Input.Password placeholder="Re-enter password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="green-btn"
            >
              Register Company
            </Button>
          </Form.Item>

          <Text>
            Already have an account?{" "}
            <a className="green-link" onClick={() => navigate("/loginPage")}>
              Login
            </a>
          </Text>
        </Form>
      </div>
    </div>
  );
};

export default ProviderRegistration;

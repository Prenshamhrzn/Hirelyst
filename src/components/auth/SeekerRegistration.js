import React from "react";
import { Form, Input, Button, Select, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/Auth.css";

const { Option } = Select;
const { Title, Text } = Typography;

const SeekerRegistration = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const payload = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone || "",
        experience: values.experience || "",
        education: values.education || "",
        skills: values.skills || "",
        jobType: values.jobType || "",
        workPreference: values.workPreference || "",
        portfolio: values.portfolio || "",
        password: values.password,
      };
      const response = await axios.post(
        "http://localhost:5000/api/seekers/register",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Registration response:", response.data); // <-- Add this

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "seekerProfile",
        JSON.stringify(response.data.seeker)
      );

      message.success("Registration successful!");
      navigate("/seeker-dashboard");
    } catch (err) {
      console.error("Registration error:", err);
      message.error(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <Title level={2}>Seeker CV Registration</Title>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="fullName"
            label="Full Name*"
            rules={[{ required: true, message: "Full name is required" }]}
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

          <Form.Item name="phone" label="Phone Number">
            <Input />
          </Form.Item>

          <Form.Item
            name="experience"
            label="Experience*"
            rules={[{ required: true, message: "Experience is required" }]}
          >
            <Select placeholder="Select Experience">
              <Option value="Fresher">Fresher</Option>
              <Option value="1-3 years">1-3 years</Option>
              <Option value="3-5 years">3-5 years</Option>
              <Option value="5+ years">5+ years</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="education"
            label="Education*"
            rules={[{ required: true, message: "Education is required" }]}
          >
            <Select placeholder="Select Education">
              <Option value="High School">High School</Option>
              <Option value="Bachelor">Bachelor</Option>
              <Option value="Master">Master</Option>
              <Option value="PhD">PhD</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="skills"
            label="Skills*"
            rules={[{ required: true, message: "Skills are required" }]}
          >
            <Input placeholder="Separate skills with commas (React, Node.js)" />
          </Form.Item>

          <Form.Item
            name="jobType"
            label="Job Type*"
            rules={[{ required: true, message: "Select job type" }]}
          >
            <Select placeholder="Select Job Type">
              <Option value="Full-time">Full-time</Option>
              <Option value="Part-time">Part-time</Option>
              <Option value="Internship">Internship</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="workPreference"
            label="Work Preference*"
            rules={[{ required: true, message: "Select work preference" }]}
          >
            <Select placeholder="Select Work Preference">
              <Option value="Remote">Remote</Option>
              <Option value="Onsite">Onsite</Option>
              <Option value="Hybrid">Hybrid</Option>
            </Select>
          </Form.Item>

          <Form.Item name="portfolio" label="Portfolio / LinkedIn (Optional)">
            <Input placeholder="Enter link if available" />
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
                  if (!value || getFieldValue("password") === value)
                    return Promise.resolve();
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register CV
            </Button>
          </Form.Item>

          <Text>
            Already have an account?{" "}
            <Button type="link" onClick={() => navigate("/loginPage")}>
              Login
            </Button>
          </Text>
        </Form>
      </div>
    </div>
  );
};

export default SeekerRegistration;

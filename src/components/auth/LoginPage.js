import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Select,
  Typography,
  Alert,
} from "antd";
import { FaUser, FaLock, FaBriefcase, FaUserShield } from "react-icons/fa";
import axios from "axios";
import "../../css/Auth.css";
import SeekerRegistration from "./SeekerRegistration";
import ProviderRegistration from "./ProviderRegistration";

const { Option } = Select;
const { Title, Paragraph } = Typography;

const LoginPage = () => {
  const [userType, setUserType] = useState("seeker");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUserTypeChange = (value) => {
    setUserType(value);
  };

  const handleLogin = async (values) => {
    const { email, password } = values;
    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      if (userType === "provider") {
        const response = await axios.post(
          "http://localhost:5000/api/employers/loginEmployer",
          { email, password }
        );

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          navigate("/employer-dashboard");
        } else {
          throw new Error("Login failed");
        }

      } else if (userType === "admin") {

        navigate("/admin-dashboard");

      } else if (userType === "seeker") {
        setIsRegistering(true);
      } else {
        setError("Unsupported user type");
      }

    } catch (err) {
      const message = err.response?.data?.message || err.message || "Login failed";
      setError(message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-glass-container">
        {!isRegistering ? (
          <>
            <div className="auth-header">
              <Title level={2}>
                Welcome to <span className="brand-gradient">Hirelyst</span>
              </Title>
              <Paragraph>Find your dream job or ideal candidate</Paragraph>
            </div>

            <Form
              layout="vertical"
              onFinish={handleLogin}
              className="auth-form"
            >
              <Form.Item
                label="User Type"
                name="userType"
                initialValue="seeker"
              >
                <Select onChange={handleUserTypeChange}>
                  <Option value="seeker">
                    <FaUser /> Job Seeker
                  </Option>
                  <Option value="provider">
                    <FaBriefcase /> Employer
                  </Option>
                  <Option value="admin">
                    <FaUserShield /> Admin
                  </Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input prefix={<FaUser />} placeholder="Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password prefix={<FaLock />} placeholder="Password" />
              </Form.Item>

              {error && (
                <Form.Item>
                  <Alert type="error" message={error} showIcon />
                </Form.Item>
              )}

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="auth-button"
                >
                  {userType === "admin" ? "Login" : "Continue"}
                </Button>
              </Form.Item>

              <div className="auth-footer">
                <Paragraph>
                  New to Hirelyst? <Link to="/registerPage">Register here</Link>
                </Paragraph>
              </div>
            </Form>
          </>
        ) : userType === "seeker" ? (
          <SeekerRegistration
            onComplete={() => navigate("/seeker-dashboard")}
            onBack={() => setIsRegistering(false)}
          />
        ) : (
          <ProviderRegistration
            onComplete={() => navigate("/employer-dashboard")}
            onBack={() => setIsRegistering(false)}
          />
        )}
      </div>
    </div>
  );
};

export default LoginPage;

import ReactDOM from "react-dom";
import { React, useState, createContext } from "react";
import "../../../css/login.css";
import WaveImg from "../../../img/wave.png";
import BgImg from "../../../img/bg.svg";
import AvtImg from "../../../img/avatar.svg";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import configData from "../../../../config.json";

export const Logincontext = createContext()
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    function login() {
        let data = { email, password };
        fetch(configData["api_base_url"] + "/auth/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            response.json().then((result) => {
                console.log("result.access_token", result.access_token);
                if (result.access_token) {
                    window.location.href = "/";
                }
            });
        });
    }

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    return (
        <>
            <img className="wave" src={WaveImg} />
            <div className="container">
                <div className="img">
                    <img src={BgImg} />
                </div>
                <div className="login-content">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item className="login-title-form">
                            <img src={AvtImg} />
                            <div className="login-title-text">Welcome</div>
                        </Form.Item>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Username!",
                                },
                            ]}
                        >
                            <Input
                                value={email}
                                className="input"
                                onChange={(e) => setEmail(e.target.value)}
                                prefix={
                                    <UserOutlined className="site-form-item-icon" />
                                }
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input
                                value={password}
                                className="input"
                                onChange={(e) => setPassword(e.target.value)}
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <div className="login-form-forgot" href="">
                                Forgot Password?
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                onClick={login}
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Login;

if (document.getElementById("login")) {
    ReactDOM.render(<Login />, document.getElementById("login"));
}

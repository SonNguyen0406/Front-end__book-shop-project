import React from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "../../../../../css/newLetter.css";

const NewLetter = () => {
    return (
        <div className="newsletter">
            <Form className="form-newLetter">
                <Form.Item>
                    <div className="form-newLetter-title">subscribe for latest updates</div>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Enter your email" />
                </Form.Item>
                <Form.Item>
                    <Button>Subscribe</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default NewLetter;

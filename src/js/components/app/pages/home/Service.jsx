import React, { useState } from "react";
import {
    CarOutlined,
    LockOutlined,
    RedoOutlined,
    PhoneOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import '../../../../../css/service.css'

const data = [
    {
        id: 1,
        icon: <CarOutlined />,
        service_name: "Free Shipping",
        description: "Order Over $100",
    },
    {
        id: 2,
        icon: <LockOutlined />,
        service_name: "Free Shipping",
        description: "Order Over $100",
    },
    {
        id: 3,
        icon: <RedoOutlined />,
        service_name: "Free Shipping",
        description: "Order Over $100",
    },
    {
        id: 4,
        icon: <PhoneOutlined />,
        service_name: "24/7 Support",
        description: "Order Over $100",
    },
];

const Service = () => {
    return (
        <Row className="service">
            {data.map(function (data, index) {
                return (
                    <Col xl={6} key={index}>
                        <Row>
                            <Col xl={8}>{data.icon}</Col>
                            <Col xl={16}>
                                <div className="service-name">{data.service_name}</div>
                                <div className="service-description">{data.description}</div>
                            </Col>
                        </Row>
                    </Col>
                );
            })}
        </Row>
    );
};

export default Service;

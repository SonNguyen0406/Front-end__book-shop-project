import React from "react";
import {
    ArrowRightOutlined,
    PhoneOutlined,
    MailOutlined,
} from "@ant-design/icons";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Row, Col, Avatar, List, Image } from "antd";
import "../../../../css/footer.css";
import { Link } from "react-router-dom";
import ImgWorldMap from '../../../../img/worldmap.png';

const our_location = [
    {
        location: "Ha Noi",
    },
    {
        location: "New York",
    },
    {
        location: "Tokyo",
    },
    {
        location: "Bac Kinh",
    },
];

const quick_link = [
    {
        feature: "Home",
    },
    {
        feature: "Product",
    },
];

const contact_info = [
    {
        phone_info: "phone",
        email_infor: "",
    },
    {
        phone_info: "",
        email_infor: "email",
    },
];

function contactinfo(item) {
    if (item.phone_info != "") {
        return (
            <Link to={"/"}>
                <PhoneOutlined />
            </Link>
        );
    } else if (item.email_infor != "") {
        return (
            <Link to={"/"}>
                <MailOutlined />
            </Link>
        );
    }
}

const Footer = () => {
    return (
        <Row className="footer">
            <Col xl={8}>
                <List
                    itemLayout="horizontal"
                    split={false}
                    dataSource={our_location}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Link to={"/"}>
                                        <AddLocationAltIcon />
                                    </Link>
                                }
                                description={
                                    <Link to={"/"}>{item.location}</Link>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col xl={8}>
                <List
                    itemLayout="horizontal"
                    split={false}
                    dataSource={quick_link}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Link to={"/"}>
                                        <ArrowRightOutlined />
                                    </Link>
                                }
                                description={
                                    <Link to={"/"}>{item.feature}</Link>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col xl={8}>
                <List
                    itemLayout="horizontal"
                    split={false}
                    dataSource={contact_info}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={contactinfo(item)}
                                description={
                                    <Link to={"/"}>
                                        {item.phone_info}
                                        {item.email_infor}
                                    </Link>
                                }
                            />
                        </List.Item>
                    )}
                />
                <Image src={ImgWorldMap}/>
            </Col>
        </Row>
    );
};

export default Footer;

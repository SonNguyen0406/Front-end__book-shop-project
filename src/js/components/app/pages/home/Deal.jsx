import React from "react";
import { Card, Row, Col, Button, Image } from "antd";
import ImgDeal from "../../../../../img/deal-img.jpg";
import "../../../../../css/deal.css";

const Deal = () => {
    return (
        <Row className="deal">
            <Col xl={12}>
                <div className="deal-content">
                    <div style={{ color: "#27ae60", fontSize: '1.2rem' }}>Deal Of The Day</div>
                    <h1>Upto 50% Off</h1>
                    <div>
                        Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
                        Elit. Unde Perspiciatis In Atque Dolore Tempora Quaerat
                        At Fuga Dolorum Natus Velit.
                    </div>
                    <div>
                        <Button>Shop Now</Button>
                    </div>
                </div>
            </Col>
            <Col xl={12} className="deal-img">
                <Image src={ImgDeal} preview={false} />
            </Col>
        </Row>
    );
};

export default Deal;

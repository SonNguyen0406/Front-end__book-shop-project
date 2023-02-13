import React, { useState } from "react";
import { Card, Row, Col, Button, Divider } from "antd";
import "../../../../../css/flashSale.css";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "../../../UI/product-card/ProductCard";
import products from "../../../../../assets/fake-data/products";

const FlashSale = () => {
    return (
        <Row className="flash-sale">
            <Divider plain>Flash Sale</Divider>
            <Swiper
                spaceBetween={10}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Autoplay, Navigation]}
                style={{ width: "100%" }}
            >
                {products.map(function (item) {
                    return (
                        <SwiperSlide>
                            <Col key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Row>
    );
};

export default FlashSale;

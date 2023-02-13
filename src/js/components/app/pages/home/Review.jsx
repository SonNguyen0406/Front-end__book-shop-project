import React from "react";
import { Card, Row, Col, Button, Divider, Rate } from "antd";
import ImgReview1 from "../../../../../img/pic-1.png";
import ImgReview2 from "../../../../../img/pic-2.png";
import ImgReview3 from "../../../../../img/pic-3.png";
import ImgReview4 from "../../../../../img/pic-4.png";
import ImgReview5 from "../../../../../img/pic-5.png";
import ImgReview6 from "../../../../../img/pic-6.png";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/review.css";

const { Meta } = Card;
const data = [
    {
        id: 1,
        img: ImgReview1,
        name: "Name",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.",
        star_rate: 3,
    },
    {
        id: 2,
        img: ImgReview2,
        name: "Book Name",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.",
        star_rate: 3,
    },
    {
        id: 3,
        img: ImgReview3,
        name: "Name",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.",
        star_rate: 3,
    },
    {
        id: 4,
        img: ImgReview4,
        name: "Book Name",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.",
        star_rate: 3,
    },
];
const Review = () => {
    return (
        <Row className="review">
            <Divider plain>Review</Divider>
            <Swiper
                spaceBetween={50}
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
                        slidesPerView: 3,
                    },
                }}
                modules={[Autoplay, Navigation]}
                style={{ width: "100%" }}
            >
                {data.map(function (data, index) {
                    return (
                        <SwiperSlide>
                            <Card
                                className="review-card"
                                key={index}
                                hoverable
                                cover={<img src={data.img} />}
                            >
                                <Meta
                                    title={data.name}
                                    description={data.description}
                                />
                                <Rate
                                    allowHalf
                                    defaultValue={data.star_rate}
                                    disabled={true}
                                />
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Row>
    );
};

export default Review;

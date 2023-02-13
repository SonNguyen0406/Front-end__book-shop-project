import React from "react";
import { Card, Row, Col, Button, Rate, Divider } from "antd";
import ImgBlog1 from "../../../../../img/blog-1.jpg";
import ImgBlog2 from "../../../../../img/blog-2.jpg";
import ImgBlog3 from "../../../../../img/blog-3.jpg";
import ImgBlog4 from "../../../../../img/blog-4.jpg";
import ImgBlog5 from "../../../../../img/blog-5.jpg";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/blog.css";

const { Meta } = Card;
const data = [
    {
        id: 1,
        img: ImgBlog1,
        name: "Blog Name",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.",
        star_rate: 3,
    },
    {
        id: 2,
        img: ImgBlog2,
        name: "Blog Name",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.",
        star_rate: 3,
    },
    {
        id: 3,
        img: ImgBlog3,
        name: "Blog Name",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.",
        star_rate: 3,
    },
    {
        id: 4,
        img: ImgBlog4,
        name: "Blog Name",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.",
        star_rate: 3,
    },
    {
        id: 5,
        img: ImgBlog5,
        name: "Blog Name",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.",
        star_rate: 3,
    },
];
const Blog = () => {
    return (
        <Row className="blog">
            <Divider plain>Our Bog</Divider>
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
                                className="blog-card"
                                key={index}
                                hoverable
                                cover={<img src={data.img} />}
                            >
                                <Meta
                                    title={data.name}
                                    description={data.description}
                                />
                                <Button>Read More</Button>
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Row>
    );
};

export default Blog;

import React from "react";
import { Card, Row, Col, Button, Image, Divider, Rate } from "antd";
import ImgSale1 from "../../../../../img/book-10.png";
import ImgSale2 from "../../../../../img/book-11.png";
import ImgSale3 from "../../../../../img/book-12.png";
import ImgSale4 from "../../../../../img/book-13.png";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/newBook.css";

const data = [
    {
        id: 1,
        img: ImgSale1,
        book_name: "Book Name",
        price: "$1.00",
        oldprice: "$2.00",
        star_rate: 3.5,
    },
    {
        id: 2,
        img: ImgSale2,
        book_name: "Book Name",
        price: "$1.00",
        oldprice: "$2.00",
        star_rate: 2,
    },
    {
        id: 3,
        img: ImgSale3,
        book_name: "Book Name",
        price: "$1.00",
        oldprice: "$2.00",
        star_rate: 5,
    },
    {
        id: 4,
        img: ImgSale4,
        book_name: "Book Name",
        price: "$1.00",
        oldprice: "$2.00",
        star_rate: 2.5,
    },
    {
        id: 5,
        img: ImgSale4,
        book_name: "Book Name",
        price: "$1.00",
        oldprice: "$2.00",
        star_rate: 3.5,
    },
];
const NewBook = () => {
    return (
        <Row className="new-book">
            <Divider plain>New Book</Divider>
            <Swiper
                spaceBetween={30}
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
                                <div
                                    style={{ display: "flex" }}
                                    className="new-book-swiper"
                                >
                                    <div>
                                        <Image src={data.img} preview={false} />
                                    </div>
                                    <div className="new-book-content">
                                        <div className="new-book-content-title">{data.book_name}</div>
                                        <div className="new-book-content-price"
                    
                                        >
                                            <h1>{data.price}</h1>
                                            <div>
                                                <s>{data.oldprice}</s>
                                            </div>
                                        </div>
                                        <div className="new-book-content-start-rate">
                                            <Rate
                                                allowHalf
                                                defaultValue={data.star_rate}
                                                disabled={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Row>
    );
};

export default NewBook;

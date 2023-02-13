import React from "react";
import book1 from "../../../../../img/book-1.png";
import book2 from "../../../../../img/book-2.png";
import book3 from "../../../../../img/book-3.png";
import book4 from "../../../../../img/book-4.png";
import book5 from "../../../../../img/book-5.png";
import book6 from "../../../../../img/book-6.png";
import stand from "../../../../../img/stand.png";
import "../../../../../css/bookShelf.css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button, Image } from "antd";
import { Link, NavLink } from "react-router-dom";

const BookShelf = () => {
    return (
        <div className="book-shelf">
            <div className="book-shelf-content">
                <h1>Upto 75% Off</h1>
                <div>
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Magnam Deserunt Nostrum Accusamus. Nam Alias Sit
                    Necessitatibus, Aliquid Ex Minima At!
                </div>
                <div>
                    <Link to={"/books"}>
                        <Button>Shop Now</Button>
                    </Link>
                </div>
            </div>
            <div className="book-shelf-swiper">
                <Swiper
                    spaceBetween={10}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
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
                    modules={[Autoplay]}
                    style={{ width: "100%" }}
                >
                    <SwiperSlide>
                        <Image src={book1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={book2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={book3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={book4} alt="" />
                    </SwiperSlide>
                </Swiper>
                <Image src={stand} preview={false} />
            </div>
        </div>
    );
};

export default BookShelf;

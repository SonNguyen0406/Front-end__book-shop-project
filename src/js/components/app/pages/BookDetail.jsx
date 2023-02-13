import React, { useState, useEffect } from "react";

import products from "../../../../assets/fake-data/products";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "antd";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

import "../../../../css/bookDetail.css";

import ProductCard from "../../../components/UI/product-card/ProductCard";

const BookDetail = () => {
    const [tab, setTab] = useState("desc");
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [reviewMsg, setReviewMsg] = useState("");
    const { id } = useParams();
    const dispatch = useDispatch();

    const product = products.find((product) => product.id === id);
    const [previewImg, setPreviewImg] = useState(product.image01);
    const { title, price, category, desc, image01 } = product;

    const relatedProduct = products.filter(
        (item) => category === item.category
    );

    const addItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                image01,
            })
        );
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(enteredName, enteredEmail, reviewMsg);
    };

    useEffect(() => {
        setPreviewImg(product.image01);
    }, [product]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <div className="book-detail">
            <Row>
                <Col xl={4}>
                    <div className="product__images ">
                        <div
                            className="img__item"
                            onClick={() => setPreviewImg(product.image01)}
                        >
                            <img
                                src={product.image01}
                                alt=""
                                className="product-img-detail"
                            />
                        </div>
                        <div
                            className="img__item"
                            onClick={() => setPreviewImg(product.image02)}
                        >
                            <img
                                src={product.image02}
                                alt=""
                                className="product-img-detail"
                            />
                        </div>

                        <div
                            className="img__item"
                            onClick={() => setPreviewImg(product.image03)}
                        >
                            <img
                                src={product.image03}
                                alt=""
                                className="product-img-detail"
                            />
                        </div>
                    </div>
                </Col>

                <Col xl={8}>
                    <div className="product__main-img">
                        <img src={previewImg}/>
                    </div>
                </Col>
                <Col xl={12}>
                    <div>
                        <h2 className="title">{title}</h2>
                        <p className="price">
                            {" "}
                            Price: <span>${price}</span>
                        </p>
                        <p className="category">
                            Category: <span>{category}</span>
                        </p>

                        <Button onClick={addItem} className="addTOCart__btn">
                            Add to Cart
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="tabs" style={{ display: "flex" }}>
                        <h5
                            className={` ${
                                tab === "desc" ? "tab__active" : ""
                            }`}
                            onClick={() => setTab("desc")}
                        >
                            Description
                        </h5>
                        <h5
                            className={` ${tab === "rev" ? "tab__active" : ""}`}
                            onClick={() => setTab("rev")}
                        >
                            Review
                        </h5>
                    </div>

                    {tab === "desc" ? (
                        <div className="tab__content">
                            <p>{desc}</p>
                        </div>
                    ) : (
                        <div className="tab__review">
                            <p className="user__name">Jhon Doe</p>
                            <p className="user__email">jhon1@gmail.com</p>
                            <p className="feedback__text">great product</p>
                        </div>
                    )}
                </Col>
            </Row>
            <Row>
                <h2 className="related__Product-title">You might also like</h2>
            </Row>
            <Row>
                {relatedProduct.map((item) => (
                    <Col key={item.id}>
                        <ProductCard item={item} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BookDetail;

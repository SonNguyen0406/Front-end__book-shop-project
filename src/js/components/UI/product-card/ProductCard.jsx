import React from "react";

import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../components/store/shopping-cart/cartSlice";
import "../../../../css/productCard.css";

const ProductCard = (props) => {
    const { id, title, image01, price } = props.item;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                image01,
                price,
            })
        );
    };

    return (
        <Row className="product__item">
            <Col xl={24} className="product__img">
                <Link to={`/books/${id}`}>
                    <img src={image01} className="product-img" />
                </Link>
            </Col>

            <Col xl={24} className="product__content">
                <h5>
                    <Link to={`/books/${id}`}>{title}</Link>
                </h5>
                <div className="product__content_price">
                    <h4 className="product__price">${price}</h4>
                    <Button className="addTOCart__btn" onClick={addToCart}>
                        Add to Cart
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default ProductCard;

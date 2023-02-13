import React from "react";
import { Row, Col, Input } from "antd";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../components/store/shopping-cart/cartSlice";
import "../../../../css/cartItem.css";
import { PlusOutlined, MinusOutlined, CloseOutlined } from "@ant-design/icons";

const CartItem = ({ item }) => {
    const { id, title, price, image01, quantity, totalPrice } = item;

    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                image01,
            })
        );
    };

    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id));
    };

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    };

    return (
        <Row className="cart__product-item">
            <Col xl={24} className="cart__product-info">
                <div>
                    <img src={image01} />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}
                >
                    <div>
                        <p className="cart__product-title">{title}</p>
                        <p className="cart__product-price">
                            {quantity}x <span>${totalPrice}</span>
                        </p>
                    </div>
                    <div>
                        <span className="delete__btn" onClick={deleteItem}>
                            <CloseOutlined />
                        </span>
                    </div>
                </div>
            </Col>

            <Col xl={6} className="cart__product-quantity">
                <span className="increase__btn" onClick={incrementItem}>
                    <PlusOutlined />
                </span>
                <span className="quantity">{quantity}</span>
                <span className="decrease__btn" onClick={decreaseItem}>
                    <MinusOutlined />
                </span>
            </Col>
        </Row>
    );
};

export default CartItem;

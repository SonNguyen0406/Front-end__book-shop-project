import React from "react";

import { Card } from "antd";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../components/store/shopping-cart/cartUiSlice";

import "../../../../css/shoppingCart.css";
import { CloseCircleOutlined } from "@ant-design/icons";

const Carts = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };
    return (
        <div className="cart__container">
            <Card className="cart__content">
                <div className="cart__close">
                    <span onClick={toggleCart}>
                        <CloseCircleOutlined />
                    </span>
                </div>

                <div className="cart__item-list">
                    {cartProducts.length === 0 ? (
                        <h6>No item added to the cart</h6>
                    ) : (
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    )}
                </div>

                <div className="cart__checkout">
                    <h3>
                        Subtotal : <span>${totalAmount}</span>
                    </h3>
                    <button>
                        <Link to="/checkout" onClick={toggleCart}>
                            Checkout
                        </Link>
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default Carts;

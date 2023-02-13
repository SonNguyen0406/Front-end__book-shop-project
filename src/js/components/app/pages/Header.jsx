import React from "react";
import {
    HeartOutlined,
    ShoppingCartOutlined,
    HomeOutlined,
    BookOutlined,
} from "@ant-design/icons";
import { Row, Col, Menu, Input, Badge } from "antd";
import { useState, useEffect, useRef } from "react";
import "../../../../css/header.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

const { Search } = Input;
const items = [
    {
        label: <NavLink to="/">Home</NavLink>,
        key: "home",
    },
    {
        label: <NavLink to="/books">Books</NavLink>,
        key: "Books",
    },
    {
        label: <NavLink to="/checkout">Checkout</NavLink>,
        key: "checkout",
    },
    {
        label: <NavLink to="/contact">Contact</NavLink>,
        key: "contact",
    },
];

const Header = () => {
    const [current, setCurrent] = useState("home");
    const [scroll, setScroll] = useState(false);

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };

    const onClick = (e) => {
        setCurrent(e.key);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 70);
        });
    }, []);

    return (
        <div>
            <Row className="header-1">
                <Col span={8} className="header-1-logo">
                    <Link to={"/"}>
                        <BookOutlined />
                        <i>Bookly</i>
                    </Link>
                </Col>
                <Col span={8} className="header-1-search">
                    <Search
                        className="input-search"
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                    />
                </Col>
                <Col span={8} className="header-1-icon-nav">
                    <HeartOutlined />
                    <Badge count={totalQuantity} onClick={toggleCart}>
                        <ShoppingCartOutlined style={{fontSize:'2rem'}}/>
                    </Badge>
                    <HomeOutlined />
                </Col>
            </Row>
            <Menu
                className={`header-2 ${scroll ? "active" : ""}`}
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
        </div>
    );
};

export default Header;

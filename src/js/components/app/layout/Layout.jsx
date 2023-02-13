import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import HeaderSection from "../pages/Header";
import "../../../../css/index.css";
import FooterSection from "../pages/Footer";
import Routers from "../routers/Routes";
import Carts from "../../UI/cart/Carts";
import {useSelector } from "react-redux";

const { Header, Content, Footer } = Layout;

const Layouts = () => {
    const showCart = useSelector((state) => state.cartUi.cartIsVisible);

    return (
        <Layout id="layout">
            <Header id="header">
                <HeaderSection />
                {showCart && <Carts />}
            </Header>
            <Content id="content">
                <Routers />
            </Content>
            <Footer id="footer">
                <FooterSection />
            </Footer>
        </Layout>
    );
};

export default Layouts;
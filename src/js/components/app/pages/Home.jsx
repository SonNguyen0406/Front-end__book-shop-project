import React from "react";
import BookShelf from "./home/BookShelf";
import Service from "./home/Service";
import FlashSale from "./home/FlashSale";
import NewLetter from "./home/NewLetter";
import NewBook from "./home/NewBook";
import Deal from "./home/Deal";
import Review from "./home/Review";
import Blog from "./home/Blog";

const Home = () => {
    return (
        <div>
            <BookShelf />
            <Service />
            <FlashSale />
            <NewLetter />
            <NewBook />
            <Deal />
            <Review />
            <Blog />
        </div>
    );
};

export default Home;

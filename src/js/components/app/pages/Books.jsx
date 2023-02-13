import React, { useState } from "react";
import { Row, Col, Input, Select } from "antd";
import products from "../../../../assets/fake-data/products";
import ProductCard from "../../../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../../../../css/books.css";

const { Search } = Input;

const Books = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [pageNumber, setPageNumber] = useState(0);

    const searchedProduct = products.filter((item) => {
        if (searchTerm.value === "") {
            return item;
        }
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        } else {
            return console.log("not found");
        }
    });

    const productPerPage = 12;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage
    );

    const pageCount = Math.ceil(searchedProduct.length / productPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="book-page">
            <Row style={{paddingBottom: '2rem', paddingTop: '1rem'}}>
                <Col xl={12}>
                    <div className="search__widget">
                        <Search
                            style={{ width: 300 }}
                            placeholder="I'm looking for...."
                            value={searchTerm}
                            enterButton
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </Col>
                <Col xl={12} align="end">
                    <div className="sorting__widget">
                        <Select
                            defaultValue="default"
                            style={{ width: 200 }}
                            //   onChange={handleChange}
                            options={[
                                { value: "default", label: "Default" },
                                {
                                    value: "ascending",
                                    label: "Alphabetically, A-Z",
                                },
                                {
                                    value: "descending",
                                    label: " Alphabetically, Z-A",
                                },
                                { value: "high-price", label: "High Price" },
                                { value: "low-price", label: "Low Price" },
                            ]}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                {displayPage.map((item) => (
                    <Col xl={6} key={item.id}>
                        <ProductCard item={item} />
                    </Col>
                ))}
            </Row>
            <Row>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={changePage}
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    containerClassName="paginationBttns"
                />
            </Row>
        </div>
    );
};

export default Books;

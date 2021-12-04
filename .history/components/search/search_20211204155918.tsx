import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DataCard } from "/./core/interface/ISearch";
import style from "./search.module.css";
interface props {
    param: string;
    listData: any;
}

const Search = ({ param, listData }: props) => {
    return (
        <div className={style.container}>
            <Container>
                <div className={style.heading}>
                    <h1>Search Results for: {param}</h1>
                </div>
                <Row>
                    {
                        listData?.map((item:DataCard,index:number) => {
                            return <Col key={index} xs="12" md="6" lg="4" className={style.card} >
                                <div className={style.card_container}>
                                    <h3><a href={item.link}>{item.title}</a></h3>
                                    <p>
                                    {item.content}
                                    </p>
                                    <a href={item.link} className={style.card_readmore}>Read More »</a>
                                </div>
                            </Col>
                        })
                    }


                </Row>
            </Container>
        </div>
    );
};

export default Search;

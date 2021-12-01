import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { clientContext } from "../contexts/ClientContext";
import { Button } from "@mui/material";
import Comments from "../components/Comments/Comments";
import { Container } from "react-bootstrap";
import { historyContext } from "../contexts/HistoryContext";

const DetailPage = () => {
    const { getDetails, productDetails } = useContext(clientContext);
    const { addViews } = useContext(historyContext)
    const params = useParams();
    let user = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        getDetails(params.id);
        
       
    }, []);
    useEffect(() => {
        if (productDetails) {
            addViews(user.username, productDetails)
        }
    },[])
    
    return (
        <>
            <div style={{ color: "white" }}>
                {productDetails ? (
                    <>
                        <div className="detail-page">
                            <div className="detail-image">
                                <img className="photochka" src={productDetails.image} alt="" />
                            </div>
                            <div>
                                <h2>{productDetails.name}</h2>
                                <p>{productDetails.description}</p>
                                <Button variant="contained" color="primary">
                                    Добавить в корзину
                                </Button>
                                <div>
                                    <h4 >Описание:</h4>
                                    <ul className="character">
                                        <li>
                                            <strong>Цена:</strong>
                                            <span>{productDetails.price}сом</span>
                                        </li>
                                        <li>
                                            <strong>Пол:</strong>
                                            <span>{productDetails.gender}</span>
                                        </li>
                                        <li>
                                            <strong>Бренд:</strong>
                                            <span>{productDetails.category}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Container>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        width: "500px",
                                    }}
                                >
                                    <Comments productId={productDetails.id} />
                                </div>
                            </Container>
                        </div>
                    </>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </>
    );
};

export default DetailPage;
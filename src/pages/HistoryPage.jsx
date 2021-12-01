import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { historyContext } from "../contexts/HistoryContext";



const HistoryPage = () => {
    const { getViews, products } = useContext(historyContext)
    const user = JSON.parse(localStorage.getItem('user'))
 
    useEffect(() => {
        getViews(user.username);
    }, [])
    console.log(products);

    return (
        <>
            <div className="cart-page">
                <Link to='/products' >
                    <Button >To products</Button>
                </Link>
                <h2 style={{color: "white"}}>History</h2>
                {products ? (
                    products.length > 0 ? (
                        <>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Название</TableCell>
                                            <TableCell>Бренд</TableCell>
                                            <TableCell align="right">Изображение</TableCell>
                                             <TableCell align="right">Сумма</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {products.map((item) => (
                                            <>
                                                        <>
                                                            <TableRow
                                                                key={item.id}
                                                                sx={{
                                                                    "&:last-child td, &:last-child th": { border: 0 },
                                                                }}
                                                            >
                                                                <TableCell component="th" scope="row">
                                                                    {item.products.name}
                                                                </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {item.products.category}
                                                        </TableCell>
                                                                <TableCell align="right">
                                                                    <img width="50px" src={item.products.image} alt="" />
                                                                </TableCell>

                                                                <TableCell align="right">
                                                                    {item.products.price} сом
                                                                </TableCell>
                                                            </TableRow>
                                                        </>
                                                
                                            </>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    ) : (<h2 style={{ color: "white" }}>Вы еще не совершали покупок</h2>)

                ) : (
                        <h2 style={{ color: "white" }}>Loading...</h2>
                )}

            </div>
        </>
    );
};

export default HistoryPage;
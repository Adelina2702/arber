import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { clientContext } from "../contexts/ClientContext";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";


const CartPage = () => {
    const { getCart, cart, changeCountProduct, addAndDeleteProductInCart } = useContext(clientContext);
    useEffect(() => {
        getCart();
    }, []);
    console.log(cart);

    return (
        <div>
            <h2 style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>Корзина</h2>
            <div>
                {cart ? (
                    cart.products.length > 0 ? (
                        <>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Название</TableCell>
                                            <TableCell>Бренд</TableCell>
                                            <TableCell align="right">Изображение</TableCell>
                                            <TableCell align="right">Количество</TableCell>
                                            <TableCell align="right">Сумма</TableCell>
                                            <TableCell align="right">#</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cart.products.map((item) => (
                                            <TableRow
                                                key={item.id}
                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {item.name}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {item.category}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <img width="50" src={item.image} alt="photo" />
                                                </TableCell>
                                                <TableCell align="right">
                                                    <input
                                                        type="number"
                                                        value={item.count}
                                                        onChange={(e) =>
                                                            changeCountProduct(e.target.value, item.id)
                                                        }
                                                    />
                                                </TableCell>
                                                <TableCell align="right">{item.subPrice} сом</TableCell>
                                                <TableCell align="right"><Button variant="contained" color="warning" onClick={() => {
                                                    addAndDeleteProductInCart(item)
                                                    getCart()
                                                }}>Удалить</Button> </TableCell>

                                            </TableRow>
                                        ))}
                                        <TableRow>
                                            <TableCell colSpan={4} align="right">
                                                Итого:
                                            </TableCell>
                                            <TableCell colSpan={1} align="right">
                                                {cart.totalPrice} сом
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Link to="/card/credit">
                                <Button variant="contained" style={{ position: 'fixed', right: '0', marginRight: '20px' }} >Оплатить</Button>
                            </Link>
                        </>
                    ) : (
                        <h2 style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>Корзина пуста</h2>
                    )
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </div>
    );
};

export default CartPage;

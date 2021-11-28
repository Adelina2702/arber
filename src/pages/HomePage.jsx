import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router";
import MediaCard from '../components/MediaCard';
import { clientContext } from "../contexts/ClientContext";
// import Pagination from "../components/Pagination";
// import MyCarousel from '../components/Carousel/Carousel';
import { pink } from "@mui/material/colors";

const HomePage = () => {
    const { getProducts, products, currentPosts } = useContext(clientContext);
    const navigate = useNavigate()
    const [brandValue, setBrandValue] = useState('')

    let object = new URLSearchParams(window.location.search)
    function filterProducts(key, value) {
        object.set(key, value)
        let newUrl = `${window.location.pathname}?${object.toString()}`;
        navigate(newUrl)
        getProducts()
        setBrandValue(value)
    }

    useEffect(() => {
        setBrandValue(object.get('category'))
    }, [object])

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            {/* <MyCarousel /> */}
            <div className="home-page">
                <div className="sidebar" >
                    <FormControl component="fieldset">
                        <FormLabel className="category_h2" style={{ color: "white", textAlign: "center", marginTop: "10px", fontFamily: "Francois One, sans-serif", letterSpacing: "1px", fontSize: "30px", fontWeight: "bold" }} component="legend">Категория</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            value={brandValue}
                            name="radio-buttons-group"
                            onChange={(e) => filterProducts("category", e.target.value)}
                        >
                            <FormControlLabel
                                value="Завтраки"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Завтраки"
                            /> <img width='100px' src="" />
                            <FormControlLabel
                                value="Супы"

                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }}
                                />}
                                label="Супы"
                            />
                            <FormControlLabel
                                value="Салаты"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Салаты"
                            />
                            <FormControlLabel
                                value="Вторые блюда"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Вторые блюда"
                            />
                            <FormControlLabel
                                value="Пицца"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Пицца"
                            />
                            <FormControlLabel
                                value="Суши"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Суши"
                            />
                            <FormControlLabel
                                value="Роллы"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Роллы"
                            />
                            <FormControlLabel
                                value="Комбо"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Комбо"
                            />
                            <FormControlLabel
                                value="Шаурма"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Шаурма"
                            />
                            <FormControlLabel
                                value="Гамбургер"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Гамбургер"
                            />
                            <FormControlLabel
                                value="Хот Дог"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Хот Дог"
                            />
                            <FormControlLabel
                                value="Гарниры"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Гарниры"
                            />
                            <FormControlLabel
                                value="Стейки"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Стейки"
                            />
                            <FormControlLabel
                                value="Паста"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Паста"
                            />
                            <FormControlLabel
                                value="Боул"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Боул"
                            />
                            <FormControlLabel
                                value="Горячие напитки"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Горячие напитки"
                            />
                            <FormControlLabel
                                value="Холодные напитки"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Холодные напитки"
                            />

                            <FormControlLabel
                                value="Дессерты"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                label="Дессерты"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                {products ? (
                    <>
                        <div className="products">
                            {currentPosts.map((product) => (
                                <MediaCard product={product} key={product.id} />
                            ))}
                        </div>
                    </>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>

            <div>
                {/* <Pagination /> */}
            </div>
        </>
    );
};

export default HomePage;

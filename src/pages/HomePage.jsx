import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router";
import MediaCard from '../components/MediaCard';
import { clientContext } from "../contexts/ClientContext";
// import MyCarousel from '../components/Carousel/Carousel';
import { pink } from "@mui/material/colors";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer/Footer";


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
            <img className="photo" src="https://www.chopard.ru/media/Catalog_P_Banners/header_HS_278608_6001_desktop.jpg" alt="photo" />
            {/* <MyCarousel /> */}
            <div className="home-page">
                <div className="sidebar" >
                    <FormControl className='radio-grrr' component="fieldset">
                        <FormLabel className="category_h2 " style={{ color: "white", textAlign: "center", marginTop: "10px", fontFamily: "Arvo, serif", letterSpacing: "1.10px", fontSize: "30px", fontWeight: "500" }} component="legend">Бренд</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            value={brandValue}
                            name="radio-buttons-group"
                            onChange={(e) => filterProducts("category", e.target.value)}
                        >
                            <div className="filter">
                            <FormControlLabel
                                value="Chopard"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }}
                                     />}
                                    style={{ color: "white", fontFamily: "Arvo, serif",}}
                                label="Chopard"
                            />
                            <FormControlLabel
                                value="Gucci"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }}
                                />}
                                    style={{ color: "white", fontFamily: "Arvo, serif", }}
                                label="Gucci"
                            />
                            <FormControlLabel
                                value="G-Shock"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }}
                                />}
                                    style={{ color: "white", fontFamily: "Arvo, serif", }}
                                label="G-Shock"
                            />
                            <FormControlLabel
                                value="Armani"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                    style={{ color: "white", fontFamily: "Arvo, serif", }}
                                label="Armani"
                            />
                            <FormControlLabel
                                value="Michael Kors"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                style={{ color: "white" }}
                                label="Michael Kors"
                            />
                            <FormControlLabel
                                value="Tissot"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                style={{ color: "white" }}
                                label="Tissot"
                            />
                            <FormControlLabel
                                value="Rolex"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                style={{ color: "white" }}
                                label="Rolex"
                            />
                            <FormControlLabel
                                value="Casio"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                style={{ color: "white" }}
                                label="Casio"
                            />
                            <FormControlLabel
                                    value="Lacoste"
                                control={<Radio
                                    sx={{
                                        color: pink[50],
                                        "&.Mui-checked": {
                                            color: pink[50],
                                        },
                                    }} />}
                                style={{ color: "white" }}
                                    label="Lacoste"
                            />
                            </div>
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
                <Pagination />
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
};

export default HomePage;

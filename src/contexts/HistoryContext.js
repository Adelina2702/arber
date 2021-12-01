import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { VIEWS_API } from '../helpers/const';

export const historyContext = createContext()
const INIT_STATE = {
    products: null
};


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_VIEWS":
            return { ...state, products: action.payload };
        default:
            return state;
    }
};


const HistoryContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);


    const getViews = async (user)  => {
        try{
            console.log(user);
            const response = await axios(`${VIEWS_API}/?user=${user}`)
            let action = {
                type: "GET_VIEWS",
                payload: response.data
            }
            dispatch(action)
        }catch(e) {
            console.log(e);
        }
    }


    const addViews = async (user, products) => {
        try {
        
            const response = await axios(`${VIEWS_API}/?user=${user}`)
         let result =  response.data.filter(item => {
             console.log(item.products.id);
            return item.products.id === products.id
           })
        // console.log(products);
           if (result.length === 0) {
               let object = {user, products }
              await axios.post(`${VIEWS_API}`,object )
           }
        } catch (e) {
            console.log(e);
        }
    }
    


    return (
        <historyContext.Provider
        value={{
            addViews,
            getViews,
            products: state.products,
        }}>
            {props.children}
        </historyContext.Provider>
    );
};

export default HistoryContextProvider;
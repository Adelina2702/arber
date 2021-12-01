import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AdminContextProvider from './contexts/AdminContext';
import AuthContextProvider from './contexts/AuthContext';
import ClientContextProvider from './contexts/ClientContext';
import AddPage from './pages/AddPage'
import AdminPage from './pages/AdminPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CreditCardPage from './pages/CreditCard/CreditCardPage'
import HistoryContextProvider from './contexts/HistoryContext';
import HistoryPage from './pages/HistoryPage';
import DetailPage from './pages/DetailPage';
import CommentContextProvider from './contexts/CommentsContext';
import ForgotPasswordPage from './pages/forgot/ForgotPasswordPage';


const MyRoutes = () => {
    return (
        <CommentContextProvider>

        <AuthContextProvider>
            <AdminContextProvider>
            <ClientContextProvider>
                <HistoryContextProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/add" element={<AddPage/>}/>
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/card/credit" element={<CreditCardPage/>}/>
            <Route path="/history" element={<HistoryPage/>} />
            <Route path="/product/:id" element={<DetailPage/>}/>
            <Route path="/forgot" element={<ForgotPasswordPage/>}/>
        </Routes>
        </BrowserRouter>    
                    </HistoryContextProvider>
            </ClientContextProvider>
        </AdminContextProvider>
        </AuthContextProvider>
        </CommentContextProvider>
    );
};

export default MyRoutes;
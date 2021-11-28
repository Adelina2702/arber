import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AuthContextProvider from './contexts/AuthContext';
import ClientContextProvider from './contexts/ClientContext';
import AddPage from './pages/AddPage'
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';

const MyRoutes = () => {
    return (
        <AuthContextProvider>
            <ClientContextProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/add" element={<AddPage/>}/>
        </Routes>
        </BrowserRouter>    
            </ClientContextProvider>
        </AuthContextProvider>
    );
};

export default MyRoutes;
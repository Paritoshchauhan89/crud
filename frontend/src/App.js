import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/all' element={<AllUser />} />
                    <Route path='/add'element={<AddUser />} />
                    <Route path='/edit/:id'element={<EditUser/>} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App
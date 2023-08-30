import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import ErrorPage from '../pages/ErrorPage';

import Navbar from '../components/Navbar';

const Router = () => {
    return (
        <BrowserRouter basename=''>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:uid" element={<DetailPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
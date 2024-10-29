// src/Router/index.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route 
                    key={route.key} 
                    path={route.route} 
                    element={<route.component />} 
                />
            ))}
        </Routes>
    );
};

export default AppRouter;

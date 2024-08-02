import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Map from './views/Map/Map';
import Tool from './views/Map/Components/Tooltip/Tooltip';

const rwwRoutes = () => {
    return (
        <ReactRoutes>
            <Route
                exact
                path="/"
                element={<Home />}
            />
            <Route 
            exact
            path="/map"
            element={<Map />}
            />
            <Route
             exact
             path="/tool"
             element={<Tool />}
             />
        </ReactRoutes>
    );
};
export default rwwRoutes;

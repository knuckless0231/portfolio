import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from "../../App";
import Skills from "../../components/skills/Skills";

export const router = createBrowserRouter([
    {
        path: "/portfolio",
        element: <>Hello</>,
    },
    {
        path:"/skills",
        element:<Skills/>
    }
]);
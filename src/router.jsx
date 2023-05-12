import React from 'react';
import Home from '@/pages/home';

const ROUTER_CONFIG = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <>404 Not Found!</>,
  },
];

export { ROUTER_CONFIG };
import React from 'react';
import LazyWrapper from '@/components/lazy-wrapper';

const ROUTER_CONFIG = [
  {
    path: '/',
    element: <LazyWrapper path="/home" />,
  },
  {
    path: '/about',
    element: <LazyWrapper path="/about" />,
  },
  {
    path: '*',
    element: <>404 Not Found!</>,
  },
];

export { ROUTER_CONFIG };
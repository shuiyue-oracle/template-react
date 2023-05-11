import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@/assets/styles/base.scss';

console.log(111);

const fn = x => {
  console.log(123);
  return x;
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);

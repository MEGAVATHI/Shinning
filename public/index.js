import ReactDom from 'react-dom/client';
import React from 'react';
import './index.css';
import Employee from './demo';
import reportWebVitals from './reportWebVitals';
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Employee name="Ram" id="002"/>
    </React.StrictMode>
      
);
reportWebVitals();

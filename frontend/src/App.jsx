import React from 'react';
import './app.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import AdminLayout from './layout/AdminLayout';
import UserRouters from './routes/UserRouters';
import AdminRouters from './routes/AdminRouters';

function App() {
  return (              
    <>
      <Routes>        
        <Route  exact path="/*" element={<Layout />}>
          <Route  element={<UserRouters />} />
        </Route>
        <Route exact path="/admin/*" element={<AdminLayout />}>
          <Route  element={<AdminRouters />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;


import React from 'react';
import { Helmet } from 'react-helmet'
import Clustering from './pages/Clustering';
import Log from './pages/Log';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Helmet>
        <title>Dimdim</title>
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Clustering/>} />
          <Route path="/log" element={<Log/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

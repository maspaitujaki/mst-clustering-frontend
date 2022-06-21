import React from 'react';
import { Helmet } from 'react-helmet'
import Clustering from './pages/Clustering';
import Log from './pages/Log';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogDetail from './pages/LogDetail';
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
          <Route path="/log/:id" element={<LogDetail />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

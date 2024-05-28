import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Layout from './components/shared/Layout';
import Categories from './components/pages/Categories';
import Offers from './components/pages/Offers';
import Page from './components/pages/Page';
import  Myads from './components/pages/Myads';
import  Groups from './components/pages/Groups';
import  ViewAllAds from './components/pages/ViewAllAds';
import NoPage from './components/pages/Error/NoPage';

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Categories />} />
          <Route path="offers" element={<Offers />} />
          <Route path="page" element={<Page />} />
          <Route path="groups" element={<Groups />} />
          <Route path="myads" element={<Myads />} />
          <Route path="viewallads" element={<ViewAllAds />} />
          <Route path="categories" element={<Categories />} />
          
          
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/navbar';
import Swipermy from './components/swiper';
import Footer from './components/footer';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isHome) {
      axios.get("https://6818ddf15a4b07b9d1d1261d.mockapi.io/najottalim/swiper")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }
  }, [isHome]);

  return (
    <div>
      <Navbar />
      {isHome && data.length > 0 && <Swipermy data={data} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

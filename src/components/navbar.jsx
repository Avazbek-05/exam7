import { Badge, Button, Input } from 'antd'
import { Briefcase, ChevronDown, CircleHelp, Earth, Grip, Handshake, Heart, MapPin, Phone, Search, ShoppingCart } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import 'swiper/css'; 
import 'swiper/css/navigation';
import axios from 'axios';
import { AppContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const { state } = useContext(AppContext);
  const navigate = useNavigate();
        const [data, setData] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get("https://6818ddf15a4b07b9d1d1261d.mockapi.io/najottalim/swiper");
              setData(response.data);
        
            } catch (error) {
              console.log( error);
            }
          };
      
          fetchData();
        }, [])
  return (
    <>
   <div className="navbar_all sticky z-999 top-0 bg-white">
       {/* //navbar top */}
       <div className='navbar text-[14px] flex items-center justify-between pt-[10px] border-b-1 border-gray-300 pb-[10px] '>
       <div className="navbar_left flex items-center justify-between gap-[15px]">
       <div className="location flex items-center gap-3">
      <MapPin  className='text-[gray]'/>
<p className='text-[gray]'>Город</p>
<p className='underline text-[#5d78ff]'>Ташкент</p>
        </div>
    <div className='handshake  flex items-center gap-3'>
    <Handshake className='text-[#bec9ff]' />
    <p className='text-[#5d78ff] text-[16px] text-900 font-bold'>Продавайтена Zon.uz</p>
    </div>
    <div className="bag flex items-center gap-3">
    <Briefcase  className='text-[#6682a9]'/>
    <p className='text-[gray]'>Покупать как юрлицо</p>
    </div>
    <div className='help text-[gray] flex items-center gap-3'>
<p>Помощь</p>
<ChevronDown />
    </div>
    <p> Контакты</p>
       </div>
       <div className="navbar_right flex items-center gap-3">
        <Phone className='text-[#6682a9] '/>
        <p className='text-[17px] font-bold '>+998-78 555-35-00</p>
       </div>
    </div>
    {/* //navbar bottom */}
    <div className="navbar_bottom flex items-center justify-between pt-[15px] gap-3 border-b-1 border-gray-300 pb-[10px]">
<div className="navbar_bottom_left flex items-center gap-4">
<a href="/"><img className='navimg' src="src/images/Logo.svg" alt="" /></a>
<Button className='cataloge !border-2 !border-black'>
    <img src="src/images/cataloge.svg" alt="" />
    <p className='text-[16px] font-bold'>Каталог</p>
</Button>
<div className="inputs !border-2 !border-gray-400 flex rounded-md w-[530px] h-[34px]">
<Input className=' input   !border-none' placeholder="Найти товары"/>
<Search className='text-[#6d87ad] bg-[#d1dae6] w-auto h-full p-2 rounded-[3px]'/>
</div>
</div>
<div className="icons flex items-center gap-3">
<Badge count={state.cart.length} showZero>
      <ShoppingCart  onClick={() => navigate('/cartpage')} className="cursor-pointer" /> 
      </Badge>
    <Badge count={state.like.length} showZero>
        <Heart className="cursor-pointer" onClick={() => navigate('/likepage')} />
      </Badge>
    <div className="language flex items-center gap-[3px]">
        <Earth/>
        <p className='font-bold'>Ru</p>
    </div>
    <CircleHelp  className='del'/>
    <Grip  className='del'/>
    <Button className='enter' type='primary'>Войти</Button>
</div>
    </div>
   </div>
      </>
  )
}

export default Navbar

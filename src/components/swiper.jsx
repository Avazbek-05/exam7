import { Button } from 'antd';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const Swipermy = ({data}) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    
    <div>
      
        {/* swiper */}
      <Swiper className=" mySwiper swiper rounded-md w-100% !flex items-center !m-auto !pt-[20px]"   slidesPerView={1}
        spaceBetween={20} >
      {data.map((item, index) => (
    <SwiperSlide key={index} className='w-[100%]'>
      <img className='rounded-md w-full' src={item.img} alt={`slide-${index}`} />
    </SwiperSlide>
  ))}  

        </Swiper>
        {/* {four cards} */}
        <div className="cards4 mt-[30px] flex items-center justify-between">
          <div className="card1 w-[265px] h-[180px] bg-[#eeeeee] !p-2 flex flex-col gap-2 rounded-md">
              <h1 className='text-center font-bold'>Добро пожаловать!</h1>
              <p className='text-center'>
              Войдите, чтобы оставлять отзывы
            и пользоваться другими
  функциями авторизованных
  пользователей.
              </p>
              <div className='flex items-center justify-center'>
              <Button className='' type='primary'>Войти в личный кабинет</Button>
              </div>
          </div>
          <div className="card2 w-[265px] h-[180px] bg-[#d1dae6] flex items-center justify-around rounded-md">
  <p className='text-[18px] font-bold text-center text-[#6682a9]'>Покупать<br />
  как юрлицо</p>
  <img className='' src="src/images/bag.svg" alt="" />
          </div>
          <div className="card3 flex flex-col  w-[265px] h-[180px] rounded-md bg-[#dbe1ff] p-6">
              <img className='p-[15px]' src="src/images/doc.svg" alt="" />
              <p className='text-center text-[18px] font-bold'>Электронный <br />
              документооборот</p>
          </div>
          <div className="card4 w-[265px] h-[180px] rounded-md p-6">
              <img className='pl-[35px] pt-[20px]' src="src/images/food.svg" alt="" />
              <p className='text-center text-white font-bold pt-[10px]'>Онлайн меню для<br />
  ресторанов и<br />
  гостиниц</p>
          </div>
        </div>
    </div>
  )
}

export default Swipermy
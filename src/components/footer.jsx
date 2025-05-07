import React from 'react'

const Footer = () => {
  return (
    <div className='footer flex items-center justify-between gap-3 mt-[50px]'>
      <div className="footer_card1 w-[330px] h-[230px] border rounded-md border-gray-300 grid grid-cols-2  p-2  ">
        <div className="call-center text-center">
        <h1 className='text-[#6682a9] font-bold'>Контакты</h1>
            <p>Call-центр</p>
            <p>+998-78 555-35-00</p>
        </div>
        <div className="workhours text-center">
                <p className='text-[#6682a9] font-bold'>График работы</p>
                <p>В будние</p>
                <p>Суббота</p>
        </div>
        <div className="email text-center">
            <p>Эл. почта</p>
            <p>info@zon.uz</p>
        </div>
       
        <div className="time text-center">
            <p>с 09:00 до 18:00</p>
            <p>с 09:00 до 18:00</p>
        </div>
      </div>
      <div className="footer_card2 flex flex-col gap-4">
<div className="card2_top w-[353px] border h-[105px] border-gray-300 p-3 rounded-md">
    <h1 className='pl-[15px] font-bold'>Мы в социальных сетях</h1>
    <div className="top_icons flex items-center justify-around  pt-[10px]">
        <a href="https://www.telegram.com/"><img className='w-[45px]' src="src/images/telega.svg" alt="" /></a>
        <a href="https://www.youtube.com"><img className='w-[45px]' src="src/images/youtube.svg" alt="" /></a>
        <a href="https://www.instagram.com"><img className='w-[45px]' src="src/images/insta.svg" alt="" /></a>
        <a href="https://www.facebook.com"><img className='w-[45px]' src="src/images/face.svg" alt="" /></a>
    </div>
</div>
<div className="card2_bottom w-[353px] border h-[110px] border-gray-300 p-3 rounded-md">
    <div className="bottom_icons flex items-center justify-around pb-[15px]">
        <a href=""><img src="src/images/payme.svg" alt="" /></a>
        <a href=""><img src="src/images/click.svg" alt="" /></a>
    </div>
    <p className='text-center'>Интренет магазин Zon.uz 2017-2024. <br />
    Все права защищены</p>
</div>
      </div>
      <div className="footer_card3 w-[310px] h-[230px] border rounded-md border-gray-300 p-4 pt-[30px]">
            <h1 className='text-[18px] font-bold'>Компания</h1>
            <div className="cols flex justify-between">
        <div className="col1 text-[#007aa7]">
            <p>О нас</p>
            <p>Реквизиты</p>
            <p>ОКонтакты</p>
            <p>Вакансии</p>
            <p>Карта сайта</p>
            <p>Публичная оферта</p>
        </div>
        <div className="col2 text-[#007aa7]">
            <p>Продавайте на Zon.uz</p>
            <p>Покупать как юрлицо</p>

        </div>
            </div>
      </div>
      <div className="footer_card4 w-[300px] h-[230px] border rounded-md border-gray-300 p-4 pt-[30px]">
        <h1 className='text-[18px] font-bold'>
        Помощь
        </h1>
     <div className="col1 text-[#007aa7] ">
<p>Вопросы и ответы</p>
<p>Условия рассрочки</p>
<p>Способ оптлаты</p>
<p>Доставка</p>
<p>Возврат товаров</p>
<p>Сервисные центры</p>
     </div>
      </div>
    </div>
  )
}

export default Footer

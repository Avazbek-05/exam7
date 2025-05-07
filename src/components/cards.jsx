import { Button, Rate } from "antd";
import axios from "axios";
import { Heart, ShoppingCart } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";

const Cards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [swiperData, setSwiperData] = useState([]);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get("https://6818ddf15a4b07b9d1d1261d.mockapi.io/najottalim/cards");
        setCardsData(res.data);
      } catch (error) {
        console.error("Cards ma'lumotida xatolik:", error);
      }
    };
    fetchCards();
  }, []);

  useEffect(() => {
    const fetchSwiper = async () => {
      try {
        const res = await axios.get("https://6818ddf15a4b07b9d1d1261d.mockapi.io/najottalim/swiper");
        setSwiperData(res.data);
      } catch (error) {
        console.error("Swiper ma'lumotida xatolik:", error);
      }
    };
    fetchSwiper();
  }, []);

  return (
    <>
      <h1 className="text-[20px] font-bold pt-[40px] pb-[20px]">Популярные</h1>
      <div className="backcards grid grid-cols-5 gap-3">
        {cardsData.map((item) => {
          const isLiked = state.like.some((likedItem) => likedItem.id === item.id);
          return (
            <div
  key={item.id}
  className="relative respcard w-[230px] pb-[20px] transition duration-300 hover:scale-105 hover:shadow-lg shadow-2xl rounded-lg bg-white"
>

              <img src={item.img} alt="" />
              <div className="info pl-[25px] pr-[10px] overflow-hidden">
                <h1 className="flex items-center justify-center flex-wrap">{item.title}</h1>
                <Rate className="!pt-[10px]" defaultValue={4} />

                {item.quantity === false ? (
                  <div className="flex items-center ">
                 <div className="flex flex-col gap-1"> <p className="text-white bg-red-500 rounded-2xl text-[12px] w-[100px] h-[25px] flex items-center justify-center mt-[10px]">Нет в наличии</p>
                  <p className="font-bold !text-[16px] pt-[10px]">{item.price.toLocaleString()} $</p>
                    </div>
                    <div><ShoppingCart  className="text-[#1bc5bd] border border-gray-500 rounded-full p-1 w-[30px] h-[30px] cursor-pointer mt-[40px] ml-[30px]"/></div>
                    </div>
                ) : (
                  <div className="price_cart flex items-center gap-16 pt-[7px]">
                    <p className="font-bold !text-[16px]">{item.price.toLocaleString()} $</p>
                    <ShoppingCart
                      onClick={() => dispatch({ type: "ADD_CART", payload: item })}
                      className="text-[#1bc5bd] border border-gray-500 rounded-full p-1 w-[30px] h-[30px] cursor-pointer"
                    />
                  </div>
                )}
              </div>
              <Heart
                onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: item })}
                className={`absolute top-2 right-3 cursor-pointer transition-all duration-200 ${isLiked ? "text-red-500" : "text-gray-300"}`}
              />
            </div>
          );
        })}
      </div>

    
        
  
  <div className="published">
  <div className="published_title flex items-center gap-[15px] mt-[30px] mb-[20px]">
    <h1 className="text-[20px] font-bold">Статьи</h1>
    <Button className="!text-[#1b7da2] !h-[25px] !rounded-2xl">
      Смотреть все
    </Button>
  </div>
  <div className="published_cards flex items-center justify-between gap-[10px]">
    <div className="published_card w-[280px] h-[280px] border rounded-md border-[#e5e7eb]">
      <img
        className="rounded-md"
        src="https://api.zon.uz/files/images/vibrometri-dlya-dvigateley-i-mexanizmov.webp"
        alt=""
      />
      <p className="text-[gray] !text-[18px] pl-[10px]">13.06.23</p>
      <p className="pl-[10px]">
        Виброметры для двигателей и <br />
        механизмов
      </p>
    </div>
    <div className="published_card w-[280px] h-[280px] border rounded-md border-[#e5e7eb]">
      <img
        className="rounded-md"
        src="https://api.zon.uz/files/images/chastotniy-preobrazovatel-chto-takoe-i-dlya-chego-on-nujen.webp"
        alt=""
      />
      <p className="text-[gray] !text-[18px] pl-[10px]">13.06.23</p>
      <p className="pl-[10px]">Частотный преобразоват что это такое</p>
    </div>
    <div className="published_card w-[280px] h-[280px] border rounded-md border-[#e5e7eb]">
      <img
        className="rounded-md"
        src="https://api.zon.uz/files/images/zachem-nujen-takoy-pribor-kak-lazerniy-taxometr.webp"
        alt=""
      />
      <p className="text-[gray] !text-[18px] pl-[10px]">13.06.23</p>
      <p className="pl-[10px]">
        Зачем нужен такой прибор,
        <br />
        лазерный тахометр?
      </p>
    </div>
    <div className="published_card w-[280px] h-[280px] border rounded-md border-[#e5e7eb]">
      <img
        className="rounded-md"
        src="https://api.zon.uz/files/images/lyuksometr-izmeritel-yarkosti-i-osveshyonnosti.webp"
        alt=""
      />
      <p className="text-[gray] !text-[18px] pl-[10px]">13.06.23</p>
      <p className="pl-[10px]">
        Люксометр - яркости и <br />
        освещённости
      </p>
    </div>
  
  </div>
</div>  

      
 
    </>
  );
};

export default Cards;





import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { Trash } from "lucide-react";
import { Button } from "antd";

const CartPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const items = state.cart || [];

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="text-center py-16 text-gray-600 text-xl">
        🛒 Ваша корзина пуста
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <div className=" flex-1 flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className=" ccc rounded-lg bg-gray-800 text-white p-6 shadow-md w-full flex items-center justify-between"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-24 w-24 object-cover rounded-md mr-4"
            />

            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold hover:underline">
                {item.title}
              </p>
              <div className="flex items-center gap-4 mt-2">
             
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  className=  "remove text-red-500 hover:underline text-sm flex items-center"
                >
                  <Trash className="mr-1" size={16} /> Remove
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center bg-white rounded-md px-2 py-1">
                <Button
                  onClick={() => dispatch({ type: "DECREMENT", payload: item })}
                  variant="ghost"
                  className="text-black px-2"
                >
                  -
                </Button>
                <span className="px-2 text-black">{item.quantity}</span>
                <Button
                  onClick={() => dispatch({ type: "INCREMENT", payload: item })}
                  variant="ghost"
                  className="text-black px-2"
                >
                  +
                </Button>
              </div>
              <p className="text-lg font-bold">
                {(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/3">
        <div className="space-y-4 rounded-lg bg-gray-800 p-6 text-white shadow-sm">
          <p className="text-xl font-semibold">Order summary</p>
          <dl className="flex items-center justify-between border-t border-gray-600 pt-2">
            <dt className="text-base font-bold">Total</dt>
            <dd className="text-base font-bold">{totalPrice.toLocaleString()} so‘m</dd>
          </dl>
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

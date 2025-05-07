import React, { createContext, useReducer, useEffect } from "react";

export const AppContext = createContext();

const initialState = {
  like: JSON.parse(localStorage.getItem("like")) || [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      const updatedLikes = [...state.like, action.payload];
      localStorage.setItem("like", JSON.stringify(updatedLikes));
      return { ...state, like: updatedLikes };
      case "ADD_CART":
        const existingItem = state.cart.find(item => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }
        
      const updatedCart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    default:
      case "INCREMENT":
  return {
    ...state,
    cart: state.cart.map(item =>
      item.id === action.payload.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ),
  };

case "DECREMENT":
  return {
    ...state,
    cart: state.cart
      .map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0), // 0 bo‘lsa o‘chir
  };

case "REMOVE":
  return {
    ...state,
    cart: state.cart.filter(item => item.id !== action.payload.id),
  };

      return state;
      case "TOGGLE_LIKE":
  const isAlreadyLiked = state.like.some(item => item.id === action.payload.id);
  const updatedLikeList = isAlreadyLiked
    ? state.like.filter(item => item.id !== action.payload.id)
    : [...state.like, action.payload];
  localStorage.setItem("like", JSON.stringify(updatedLikeList));
  return { ...state, like: updatedLikeList };

  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(state.like));
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.like, state.cart]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

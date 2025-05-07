import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import CartPage from '../pages/cartpage';
import Likepage from '../pages/Likepage';
import Cards from '../components/cards';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Cards />,
      },
      {
        path: '/cartpage',
        element: <CartPage />,
      },
      {
        path: '/likepage',
        element: <Likepage />,
      },
    ],
  },
]);

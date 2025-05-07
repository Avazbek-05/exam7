import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { AppProvider } from './context/context.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <div className="container">

  <StrictMode>
    <AppProvider >
      <App />
    </AppProvider>
    <Toaster/>
  </StrictMode>,
  </div>
);

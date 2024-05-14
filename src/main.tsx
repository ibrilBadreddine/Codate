import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import "@/assets/style/main.scss";
import App from '@/views/app';
import { ContextProvider } from './core/context/useStateContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);

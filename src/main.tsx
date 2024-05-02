import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import "@/assets/style/main.scss";
import App from '@/views/app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

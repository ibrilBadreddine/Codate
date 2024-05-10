import "./style.scss";
import { Outlet } from 'react-router-dom'
import Header from "./_header";
import Footer from "./_footer";

export default function BaseLayout() {
  return (
    <div className='base-app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

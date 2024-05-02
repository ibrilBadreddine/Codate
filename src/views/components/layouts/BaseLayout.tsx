import "./style.scss";
import { Outlet } from 'react-router-dom'
import Header from "./_header";

export default function BaseLayout() {
  return (
    <div className='base-app'>
      <Header />
      <Outlet />
      {/* Footer */}
    </div>
  )
}

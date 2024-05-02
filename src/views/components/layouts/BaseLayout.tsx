import "./style.scss";
import { Outlet } from 'react-router-dom'

export default function BaseLayout() {
  return (
    <div className='base-app'>
      {/* Header */}
      <Outlet />
      {/* Footer */}
    </div>
  )
}

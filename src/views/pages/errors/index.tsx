import "./style.scss";
import ErrorImage from "@/assets/images/404-error.png";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className='error-page'>
      <div className="error-area">
        <div className="error-picture">
          <img src={ErrorImage} alt="404 Error" />
        </div>
        <div className="error-content">
          <h1>Oops! Lost in the Code Forest</h1>
          <p>Looks like you've wandered off the beaten path. Let's find our way back together!</p>
          <div className="action">
            <Link to="/" className="base-button">
              <span className="material-symbols-outlined">chevron_left</span>
              Back to Safety
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

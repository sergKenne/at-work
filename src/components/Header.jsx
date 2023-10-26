import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import avatar from "../assets/avatar.png"
import favorite from "../assets/favorite.svg"
import notification from "../assets/notification.svg"


const Header = () => {
  return (
      <header className="header">
          <div className="container">
              <nav className="header__nav">
                  <Link to="/">
                      <img src={logo} alt="logo" className="header__logo" />
                  </Link>
                  <div className="header__nav-right">
                      <div className="header__nav-icons">
                        <img src={favorite} alt="favorite" className="header__icon" />
                        <img src={notification} alt="notification" className="header__icon" />
                      </div>
                      <div className="header__avatar">
                          <img src={avatar} alt="avatar" className="header__avatar-img" />
                          <span className="header__avatar-name">Ivan1234</span>
                      </div>
                  </div>
              </nav>
          </div>
      </header>
  );
}

export default Header
import { Link } from "react-router-dom"
import avatar from "../assets/avatar.png"

const Header = () => {
  return (
      <header className="header">
          <div className="container">
              <nav className="header__nav">
                  <Link to="/">
                      <svg className="header__logo">
                          <use xlinkHref="/sprite.svg#logo"></use>
                      </svg>
                  </Link>
                  <div className="header__nav-right">
                      <div className="header__nav-icons">
                          <svg className="header__icon">
                              <use xlinkHref="/sprite.svg#favorite"></use>
                          </svg>
                          <svg className="header__icon">
                              <use xlinkHref="/sprite.svg#notification"></use>
                          </svg>
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
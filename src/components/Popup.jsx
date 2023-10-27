import { useNavigate } from "react-router-dom";
import popup from "../assets/popup.png"

const Popup = ({ setShowPopup, showPopup }) => {
  const navigate = useNavigate()
  return (
      <div className={`popup ${showPopup ? 'show' : ''}`}>
          <div className="popup__inner">
              <svg
                  className="popup__cross"
                  onClick={() => {
                      setShowPopup(false);
                      navigate('/');
                  }}>
                  <use xlinkHref="/sprite.svg#cross"></use>
              </svg>
              <img src={popup} alt="popup" className="popup__img" />
              <p className="popup__text">Изменения сохранены!</p>
          </div>
      </div>
  );
}

export default Popup
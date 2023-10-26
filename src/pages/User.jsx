import arrowLeft from "../assets/arrow-left.svg"
const User = () => {
  return (
      <div className="user">
          <button className="user__arrow-btn">
              <img src={arrowLeft} alt="arrow" />
              <span>Назад</span>
          </button>
          <div className="user__content">
              <div className="user__profile">
                profile
              </div>
              <div className="user__form">
                  <h2 className="title">Данные профиля</h2>
              </div>
          </div>
      </div>
  );
}

export default User
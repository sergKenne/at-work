import Dropdown from "./Dropdown";

const Card = ({ user, image, isDisabled}) => {
  
  return (
      <div className={`card ${isDisabled ? 'disabled' : ''}`}>
          <img src={image} alt="" className="card__img" />
          <div className="card__body">
              <div className="card__name">
                  <span className="card__text">{user.username}</span>
                  <Dropdown user={user} isDisabled={isDisabled} />
              </div>
              <p className="card__work">{user.company.name}</p>
              <p className="card__city">{user.address.city}</p>
          </div>
      </div>
  );
}

export default Card
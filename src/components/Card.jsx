import Dropdown from "./Dropdown";

const Card = ({name, work, city, image}) => {
  return (
      <div className="card">
          <img src={image} alt="" className="card__img" />
          <div className="card__body">
            <h5 className="card__name">{ name}</h5>
            <p className="card__work">{ work}</p>
            <p className="card__city">{city}</p>
            <Dropdown />
          </div>
      </div>
  );
}

export default Card
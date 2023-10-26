import { useState } from "react"
import dropdown from "../assets/dropdown.svg"
import { useNavigate } from "react-router-dom";
const Dropdown = () => {
  const [isDrop, setIsDrop] = useState(false)
  const navigate = useNavigate()
  return (
      <div className="dropdown">
          <div className="dropdown__inner">
            <img
              src={dropdown}
              alt="icon"
              className="dropdown__icon"
              onClick={() => setIsDrop(prevIsDrop => !prevIsDrop)}
            />
            <ul className={`dropdown__list ${isDrop ? 'show' : ''}`}>
              <li
                className="dropdown__list-item"
                onClick={() => navigate("/user/1")}
              >Редактировать</li>
              <li className="dropdown__list-item">Архивировать</li>
              <li className="dropdown__list-item">Скрыть</li>
            </ul>
          </div>
      </div>
  );
}

export default Dropdown
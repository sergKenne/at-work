import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToAchiv, removeFromAcrhiv, removeFromList } from "../store/users/usersSlice";

const Dropdown = ({ user, isDisabled }) => {
    const [isDrop, setIsDrop] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addAchiv = () => {
        dispatch(addToAchiv(user));
        setIsDrop(false);
    };
    const removeItem = () => {
        if (isDisabled) {
            dispatch(removeFromAcrhiv(user));
            setIsDrop(false);
        } else {
            dispatch(removeFromList(user))
        }
    };
    return (
        <div className="dropdown">
            <div className="dropdown__inner">
                <svg
                    className="dropdown__icon"
                    onClick={() => setIsDrop((prevIsDrop) => !prevIsDrop)}>
                    <use xlinkHref="/sprite.svg#dropdown"></use>
                </svg>
                <ul className={`dropdown__list ${isDrop ? 'show' : ''}`}>
                    <li
                        className="dropdown__list-item"
                        onClick={() => navigate(`/user/${user.id}`)}>
                        <button className="dropdown__btn" disabled={isDisabled}>Редактировать</button>
                    </li>
                    <li className="dropdown__list-item" onClick={addAchiv}>
                        <button className="dropdown__btn" disabled={isDisabled}>Архивировать</button>
                    </li>
                    <li className="dropdown__list-item" onClick={removeItem}>
                        <button className="dropdown__btn">Скрыть</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dropdown
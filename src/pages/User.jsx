import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import userProfile from "../assets/user-profile.png"
import InputComponent from "../components/InputComponent";
import { editUser } from "../store/users/usersSlice";
import Popup from "../components/Popup";
const User = () => {
   const { id } = useParams()
   const { users } = useSelector((state) => state.users);
   const user = users.find((user) => user.id == id);
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [errorMsg, setErrorMsg] = useState();
   const [showPopup, setShowPopup] = useState(false);

    const inputForms=[
        { type: 'text', label: 'Имя', name: 'name' },
        { type: 'text', label: 'Никнейм', name: 'username' },
        { type: 'email', label: 'Почта', name: 'email' },
        { type: 'text', label: 'Город', name: 'city' },
        { type: 'text', label: 'Телефон', name: 'phone' },
        { type: 'text', label: 'Название компании', name: 'work' },
    ];
    const [inputs, setInputs] = useState({
        name: "",
        username: "",
        email: "",
        city: "",
        phone: "",
        work: ""
    })
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
   }
   
   const handleSubmit = (e) => {
      e.preventDefault();
      if (
         inputs.name.trim().length === 0 ||
         inputs.username.trim().length === 0 ||
         inputs.email.trim().length === 0 ||
         inputs.city.trim().length === 0 ||
         inputs.work.trim().length === 0 
      ) {
         setErrorMsg('Please fill all Fields');
         setTimeout(()=> setErrorMsg(""), 2000)
      } else {
         dispatch(editUser({ id, inputs }));
         setShowPopup(true);
         setTimeout(() => {
            navigate("/") 
         },4000)
        
      }
   }
   
   useEffect(() => {
      user && setInputs({
         name: user.name,
         username: user.username,
         email: user.email,
         city: user.address.city,
         phone: user.phone,
         work: user.company.name,
      });
   }, [user])

  return (
      <div>
          <div className="user">
              <div className="user__top">
                  <button className="user__arrow-btn" onClick={() => navigate('/')}>
                      <svg className="user__arrow-svg">
                          <use xlinkHref="/sprite.svg#arrow-left"></use>
                      </svg>
                      <span>Назад</span>
                  </button>
              </div>
              <div className="user__content">
                  <div className="user__profile">
                      <img className="user__image" src={userProfile} alt="user" />
                      <div className="user__info">
                          <h5 className="title user__info-title">Данные профиля</h5>
                          <h6 className="title user__info-text">Рабочее пространство</h6>
                          <h6 className="title user__info-text">Приватность</h6>
                          <h6 className="title user__info-text">Безопасность</h6>
                      </div>
                  </div>
                  <div className="user__form">
                      {errorMsg && <p className="user__error">{errorMsg}</p>}
                      <h2 className="title">Данные профиля</h2>
                      <form onSubmit={handleSubmit} className="user__form-inner" action="">
                          {inputForms.map((element) => (
                              <InputComponent
                                  {...element}
                                  handleChange={handleChange}
                                  inputs={inputs}
                                  key={element.name}
                              />
                          ))}

                          <button type="submit" className="user__submit-btn ">
                              Сохранить
                          </button>
                      </form>
                  </div>
              </div>
          </div>
          <Popup setShowPopup={setShowPopup} showPopup={showPopup} />
      </div>
  );
}

export default User
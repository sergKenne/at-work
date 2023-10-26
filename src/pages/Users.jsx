import Card from "../components/Card";
import profile from '../assets/profile.png';

const Users = () => {
  return (
      <div className="users">
          <h2 className="title">Активные</h2>
          <div className="users__cards">
              {[1, 2, 3, 4, 5, 6].map((card, ind) => (
                  <Card
                      key={ind}
                      name="WowChika"
                      work="At-Work"
                      city="Санкт-Петербург"
                      image={profile}
                  />
              ))}
          </div>
          <h2 className="title">Архив</h2>
          <div className="users__cards users__cards--archive">
              {[1, 2, 3, 4, 5, 6].map((card, ind) => (
                  <Card
                      key={ind}
                      name="WowChika"
                      work="At-Work"
                      city="Санкт-Петербург"
                      image={profile}
                  />
              ))}
          </div>
      </div>
  );
}

export default Users
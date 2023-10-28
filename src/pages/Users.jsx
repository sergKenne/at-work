import Card from '../components/Card';
import profile from '../assets/profile.png';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';

const Users = () => {
    const { loading, users, archiv } = useSelector((state) => state.users);

    return (
        <div className="users">
            {loading && <Loading />}
            <div>
                <h2 className="title">Активные</h2>
                {users.length ? (
                    <div className="users__cards">
                        {users.map((user) => (
                            <div className="users__cards-item" key={user.id}>
                                <Card user={user} image={profile} isDisabled={false} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <h4 className="users__empty">Your Activ is empty...</h4>
                )}
                <h2 className="title">Архив</h2>
                {archiv.length ? (
                    <div className="users__cards users__cards--archive">
                        {archiv.map((user) => (
                            <div className="users__cards-item" key={user.id}>
                                <Card user={user} image={profile} isDisabled={true} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <h4 className="users__empty">Your Archiv is empty...</h4>
                )}
            </div>
        </div>
    );
};

export default Users;

import Card from '../components/Card';
import profile from '../assets/profile.png';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';

const Users = () => {
    const { loading, users, archiv } = useSelector((state) => state.users);

    return (
        <div className="users">
            {loading && <Loading />}
            {users.length && (
                <div>
                    <h2 className="title">Активные</h2>
                    <div className="users__cards">
                        {users.map((user) => (
                            <div className="users__cards-item" key={user.id}>
                                <Card user={user} image={profile} isDisabled={false} />
                            </div>
                        ))}
                    </div>
                    <h2 className="title">Архив</h2>
                    <div className="users__cards users__cards--archive">
                        {archiv.map((user) => (
                            <div className="users__cards-item" key={user.id}>
                                <Card  user={user} image={profile} isDisabled={true} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;

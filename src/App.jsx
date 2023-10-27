import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Users from './pages/Users'
import User from './pages/User';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import { useDispatch } from 'react-redux';
import { fetchUsersAsync } from './store/users/usersSlice';

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUsersAsync());
    }, []);
   
  return (
      <div className="page">
          <Header />
          <main className="container">
              <Routes>
                  <Route path="/" element={<Users />} />
                  <Route path="/user/:id" element={<User />} />
                  <Route path='*' element={<NotFound />} />
              </Routes>
          </main>
      </div>
  );
}

export default App

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import AddRecipePage from './pages/AddRecipePage';
import RecipePage from './pages/RecipePage';
import ProfilePage from './pages/ProfilePage';
import ProfileRecipesPage from './pages/ProfileRecipesPage';
import ProfileFavoritesPage from './pages/ProfileFavoritesPage';
import ProfileFollowersPage from './pages/ProfileFollowersPage';
import ProfileFollowingPage from './pages/ProfileFollowingPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from './api/current';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        {/* Публічні маршрути */}
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />

        {/* Приватні маршрути */}
        <Route element={<PrivateRoute />}>
          <Route path="/recipe/add" element={<AddRecipePage />} />

          <Route path="/profile" element={<ProfilePage />}>
            <Route path="my-recipes" element={<ProfileRecipesPage />} />
            <Route path="my-favorites" element={<ProfileFavoritesPage />} />
            <Route path="my-followers" element={<ProfileFollowersPage />} />
            <Route path="my-following" element={<ProfileFollowingPage />} />
          </Route>

          <Route path="/profile/:id" element={<ProfilePage />}>
            <Route path="recipes" element={<ProfileRecipesPage />} />
            <Route path="followers" element={<ProfileFollowersPage />} />
          </Route>
        </Route>
      </Routes>
    </Layout>
  );
}

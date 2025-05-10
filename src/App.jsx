import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentUser } from './api/current';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import AddRecipePage from './pages/AddRecipePage';
import RecipePage from './pages/RecipePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProfileRecipesPage from './pages/ProfileRecipesPage';
import ProfileFavoritesPage from './pages/ProfileFavoritesPage';
import ProfileFollowersPage from './pages/ProfileFollowersPage';
import ProfileFollowingPage from './pages/ProfileFollowingPage';
import NotFound from './pages/NotFound/NotFound.jsx';

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
            {/* For the first time - redirect */}
            <Route index element={<Navigate to="my-recipes" replace />} /> 
            <Route path="my-recipes" element={<ProfileRecipesPage />} />
            <Route path="my-favorites" element={<ProfileFavoritesPage />} />
            <Route path="my-followers" element={<ProfileFollowersPage />} />
            <Route path="my-following" element={<ProfileFollowingPage />} />
          </Route>

          <Route path="/profile/:id" element={<ProfilePage />}>
            {/* For the first time - redirect */}
            <Route index element={<Navigate to="recipes" replace />} />
            <Route path="recipes" element={<ProfileRecipesPage />} />
            <Route path="followers" element={<ProfileFollowersPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Layout>
  );
}

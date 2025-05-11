import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { currentUser } from './api/current';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute';
import Loader from './components/Loader/Loader';

// 🔁 Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const RecipePage = lazy(() => import('./pages/RecipePage'));
const AddRecipePage = lazy(() => import('./pages/AddRecipePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const ProfileRecipesPage = lazy(() => import('./pages/ProfileRecipesPage'));
const ProfileFavoritesPage = lazy(() => import('./pages/ProfileFavoritesPage'));
const ProfileFollowersPage = lazy(() => import('./pages/ProfileFollowersPage'));
const ProfileFollowingPage = lazy(() => import('./pages/ProfileFollowingPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />

          {/* Private routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/recipe/add" element={<AddRecipePage />} />

            {/* Self Profile */}
            <Route path="/profile" element={<ProfilePage />}>
              <Route index element={<Navigate to="my-recipes" replace />} />
              <Route path="my-recipes" element={<ProfileRecipesPage />} />
              <Route path="my-favorites" element={<ProfileFavoritesPage />} />
              <Route path="my-followers" element={<ProfileFollowersPage />} />
              <Route path="my-following" element={<ProfileFollowingPage />} />
            </Route>

            {/* Other User Profile */}
            <Route path="/profile/:id" element={<ProfilePage />}>
              <Route index element={<Navigate to="recipes" replace />} />
              <Route path="recipes" element={<ProfileRecipesPage />} />
              <Route path="followers" element={<ProfileFollowersPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

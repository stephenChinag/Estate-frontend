import {
  // Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import HomePage from './pages/Home/homePage';
import ListPage from './pages/listPage/listPage';
import Layout, { RequireAuth } from './pages/layout/layout';
import SinglePage from './pages/singlePage/SinglePage';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login.tsx';
import ProfileUpdatePage from './pages/profileUpdatePage/profileUpdatePage.tsx';
import NewPostPage from './pages/newPostPage/NewPostPage.tsx';
import { listPageLoader, singlePageLoader } from './lib/loaders.tsx';
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      // errorElement: <Navigate to="/" />,

      children: [
        { path: '', element: <HomePage /> },

        { path: '/list', element: <ListPage />, loader: listPageLoader },
        { path: '/:id', element: <SinglePage />, loader: singlePageLoader },
        { path: 'login', element: <Login /> },
        { path: '/register', element: <Register /> },
      ],
    },

    {
      path: '/',
      element: <RequireAuth />,
      children: [
        { path: '/profile', element: <Profile /> },
        { path: '/profile/update', element: <ProfileUpdatePage /> },
        { path: '/add', element: <NewPostPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

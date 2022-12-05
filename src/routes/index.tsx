import { createBrowserRouter } from 'react-router-dom';
import { Home, Login, NotFound, ServerList } from 'components/pages';
import ProtectedRoute from 'routes/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'server-list',
        element: (
          <ProtectedRoute>
            <ServerList />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;

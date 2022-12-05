import { createBrowserRouter } from 'react-router-dom';
import { Home, Login, ServerList } from 'components/pages';
import ProtectedRoute from 'routes/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div />,
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

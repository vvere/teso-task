import { createBrowserRouter } from 'react-router-dom';
import { Home, Login, ServerList } from 'components/pages';

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
        element: <ServerList />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from 'react-router-dom';

import { HomeRoute } from './home.route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoute />,
  },
]);

export default router;

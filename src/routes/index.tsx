import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@layouts';

import { ErrorPage } from '@components/ErrorPage/ErrorPage';
import { HomeRoute } from './home.route';
import { CharacterRoute } from './character.route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage message="No encontramos lo que buscas, lo sentimos" />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      {
        element: <CharacterRoute />,
        path: '/:characterId',
      },
    ],
  },
]);

export default router;

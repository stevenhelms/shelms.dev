import { lazy } from 'react';

import MinimalLayout from 'layout/MinimalLayout';
import Loadable from 'components/Loadable';

const PersonalLayout = Loadable(lazy(() => import('pages/personal/index')));

const PersonalRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/',
      element: <PersonalLayout />,
    },
    {
      path: 'p',
      element: <PersonalLayout />,
    },
  ],
};

export default PersonalRoutes;

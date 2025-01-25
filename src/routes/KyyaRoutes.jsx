import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Chocolate = Loadable(lazy(() => import('pages/kyya/index')));

// ==============================|| MAIN ROUTING ||============================== //

const KyyaRoutes = {
  path: '/kyya',
  element: <Dashboard />,
  children: [
    {
      path: '/kyya',
      element: <Chocolate />
    },
    {
      path: 'chocolate',
      element: <Chocolate />
    }
  ]
};

export default KyyaRoutes;

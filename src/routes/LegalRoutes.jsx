import { lazy } from 'react';

import MinimalLayout from 'layout/MinimalLayout';
import Loadable from 'components/Loadable';

const PrivacyPolicy = Loadable(lazy(() => import('pages/legal/Privacy')));
const TermsOfService = Loadable(lazy(() => import('pages/legal/TermsOfService')));

const LegalRoutes = {
  path: '/legal',
  element: <MinimalLayout />,
  children: [
    {
      path: 'privacy',
      element: <PrivacyPolicy />,
    },
    {
      path: 'terms',
      element: <TermsOfService />,
    },
    {
      path: 'tos',
      element: <TermsOfService />,
    },
  ],
};

export default LegalRoutes;

import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LegalRoutes from './LegalRoutes';
import LoginRoutes from './LoginRoutes';
import KyyaRoutes from './KyyaRoutes';
import PersonalRoutes from './PersonalRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter(
  [MainRoutes, LegalRoutes, LoginRoutes, KyyaRoutes, PersonalRoutes],
  {
    basename: import.meta.env.VITE_APP_BASE_NAME,
  }
);

export default router;

import { Box, Button, Link } from '@mui/material';
import './PersonalLayout.css';

import Header from './Header';
import Snapshot from './Snapshot';
import Spotlight from './Spotlight';
import Things from './Things';
import Footer from './Footer';

export default function PersonalLayout() {
  return (
    <Box className="landing main-body" id="page-wrapper">
      <Header />
      <Snapshot />
      <Spotlight />
      <Things />
      <Footer />
    </Box>
  );
}

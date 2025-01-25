import { Box, Button, Link } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const Header = () => {
  return (
    <Box component="header" id="banner">
      <div className="inner">
        <h2>Steve Helms</h2>
        <p>Follower of Jesus + Husband + Father + Missionary + Teacher + Student</p>
        <ul className="actions special">
          <li>
            <Button
              onClick={() => scrollToElement('snapshot')}
              variant="outlined"
              sx={{ color: '#fff', borderColor: '#fff', backgroundColor: 'transparent' }}
            >
              Explore
            </Button>
          </li>
        </ul>
      </div>
      <Link onClick={() => scrollToElement('snapshot')} className="more">
        Learn More
        <br />
        <KeyboardDoubleArrowDownIcon fontSize="large" />
      </Link>
    </Box>
  );
};

export default Header;

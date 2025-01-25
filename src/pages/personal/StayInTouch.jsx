import { Box, Typography } from '@mui/material';

const StayInTouch = () => {
  return (
    <Typography variant="section" id="cta" className="wrapper style4">
      <Box variant="div" className="inner" sx={{ padding: '5em 0' }}>
        <header>
          <h2>Stay In Touch</h2>
          <p>
            If you&apos;re looking for help with your nutrition, help with technology, or just want to connect, feel free to connect with
            me.
          </p>
        </header>
      </Box>
    </Typography>
  );
};

export default StayInTouch;

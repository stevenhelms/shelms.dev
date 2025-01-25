import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Snapshot = () => {
  const theme = useTheme();

  return (
    <Box
      id="snapshot"
      className="wrapper style1 special"
      sx={{ background: theme.palette.accent }}
      component="section"
    >
      <div className="inner">
        <header className="major">
          <h2>Quick Snapshot</h2>
          <p>
            I am a child of God, missionary, life-long learner and problem-solver. Husband of one,
            father of five. Bachelor of Business in Information Systems, Master of Science in
            Cybersecurity. I lead by example, see the big picture and create strategies to succeed.
            I have been working with technology since 1988 in some form to accomplish those things.
          </p>
          <p>
            I want to serve people with my gifts. I develop apps to help people improve their
            health. I'm a nutrition coach, chef-in-training, and love food. Food is not only fuel
            for the body but builds relationships, and creates memories with friends and families. I
            strive to help others see the health benefits of whole, minimally-processed foods so
            they can live a high quality life.
          </p>
        </header>
      </div>
    </Box>
  );
};

export default Snapshot;

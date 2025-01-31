import PropTypes from 'prop-types';
import { Box, Typography, Link } from '@mui/material';
import { MuiMarkdown, getOverrides } from 'mui-markdown';

const PolicyWrapper = ({ markdownText }) => {
  return (
    <Box sx={{ maxWidth: '80%', margin: 'auto', m: 5 }}>
      <MuiMarkdown
        overrides={{
          ...getOverrides({}), // This will keep the other default overrides.
          h1: ({ children, ...props }) => (
            <Typography variant="h4" gutterBottom {...props}>
              {children}
            </Typography>
          ),
          p: ({ children, ...props }) => (
            <Typography variant="body1" paragraph {...props}>
              {children}
            </Typography>
          ),
          a: ({ children, href, ...props }) => (
            <Link href={href} target="_blank" rel="noopener" {...props}>
              {children}
            </Link>
          ),
          ul: ({ children, ...props }) => (
            <ul style={{ listStyleType: 'square' }} {...props}>
              {' '}
              {/* Example of inline style */}
              {children}
            </ul>
          ),
        }}
      >
        {markdownText}
      </MuiMarkdown>
    </Box>
  );
};

PolicyWrapper.propTypes = {
  markdownText: PropTypes.string.isRequired,
};

export default PolicyWrapper;

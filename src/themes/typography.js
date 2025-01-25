// ==============================|| DEFAULT THEME - TYPOGRAPHY ||============================== //

export default function Typography(fontFamily) {
  return {
    htmlFontSize: 16,
    fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: '2.375rem',
      lineHeight: 1.21
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.27
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.33
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5
    },
    h6: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.57
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.57
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: 1.66
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.57
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66
    },
    h2personal: {
      transform: 'scale(1)',
      transition: 'transform 0.5s ease, opacity 0.5s ease',
      display: 'inline-block',
      fontSize: '1.75em',
      opacity: 1,
      padding: '0.35em 1em',
      position: 'relative',
      zIndex: 1,

      '&::before, &::after': {
        transition: 'width 0.85s ease',
        transitionDelay: '0.25s',
        background: '#fff', // replace with your desired color
        content: '""',
        display: 'block',
        height: '2px',
        position: 'absolute',
        width: '100%'
      },

      '&:before': {
        top: 0,
        left: 0
      },

      '&:after': {
        bottom: 0,
        right: 0
      }
    },
    overline: {
      lineHeight: 1.66
    },
    button: {
      textTransform: 'capitalize'
    }
  };
}

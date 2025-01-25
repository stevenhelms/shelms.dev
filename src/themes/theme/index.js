// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

export default function Theme(colors) {
  const { blue, red, gold, cyan, green, grey } = colors;
  const greyColors = {
    0: grey[0],
    50: grey[1],
    100: grey[2],
    200: grey[3],
    300: grey[4],
    400: grey[5],
    500: grey[6],
    600: grey[7],
    700: grey[8],
    800: grey[9],
    900: grey[10],
    A50: grey[15],
    A100: grey[11],
    A200: grey[12],
    A400: grey[13],
    A700: grey[14],
    A800: grey[16],
  };
  const contrastText = '#fff';

  return {
    primary: {
      lighter: blue[0],
      100: blue[1],
      200: blue[2],
      light: blue[3],
      400: blue[4],
      main: blue[5],
      dark: blue[6],
      700: blue[7],
      darker: blue[8],
      900: blue[9],
      contrastText,
    },
    secondary: {
      lighter: greyColors[100],
      100: greyColors[100],
      200: greyColors[200],
      light: greyColors[300],
      400: greyColors[400],
      main: greyColors[500],
      600: greyColors[600],
      dark: greyColors[700],
      800: greyColors[800],
      darker: greyColors[900],
      A100: greyColors[0],
      A200: greyColors.A400,
      A300: greyColors.A700,
      contrastText: greyColors[0],
    },
    error: {
      lighter: red[0],
      light: red[2],
      main: red[4],
      dark: red[7],
      darker: red[9],
      contrastText,
    },
    warning: {
      lighter: gold[0],
      light: gold[3],
      main: gold[5],
      dark: gold[7],
      darker: gold[9],
      contrastText: greyColors[100],
    },
    info: {
      lighter: cyan[0],
      light: cyan[3],
      main: cyan[5],
      dark: cyan[7],
      darker: cyan[9],
      contrastText,
    },
    success: {
      lighter: green[0],
      light: green[3],
      main: green[5],
      dark: green[7],
      darker: green[9],
      contrastText,
    },
    grey: greyColors,

    banner: {
      textAlign: 'center',
      padding: '50px 0',
      backgroundColor: '#f5f5f5',
    },
    inner: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    actions: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: '#007bff',
      padding: '10px 20px',
      borderRadius: '5px',
    },
    more: {
      display: 'inline-block',
      marginTop: '20px',
      textDecoration: 'none',
      color: '#007bff',
    },
    h2: {
      transform: 'scale(1)',
      transition: 'transform 0.5s ease, opacity 0.5s ease',
      display: 'inline-block',
      fontSize: '1.75em',
      opacity: 1,
      padding: '0.35em 1em',
      position: 'relative',
      zIndex: 1,

      '&:before, &:after': {
        transition: 'width 0.85s ease',
        transitionDelay: '0.25s',
        background: '#000', // replace with your desired color
        content: '""',
        display: 'block',
        height: '2px',
        position: 'absolute',
        width: '100%',
      },

      '&:before': {
        top: 0,
        left: 0,
      },

      '&:after': {
        bottom: 0,
        right: 0,
      },
    },
  };
}

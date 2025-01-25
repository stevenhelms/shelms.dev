// material-ui
import { createTheme } from '@mui/material/styles';

// third-party
import { presetPalettes } from '@ant-design/colors';

// project import
import ThemeOption from './theme';

export default function PersonalThemeOption(mode, presetColor) {
  const colors = presetPalettes;
  const paletteColor = ThemeOption(colors, presetColor, mode);

  return createTheme({
    personal: {
      mode,
      common: {
        black: '#000',
        white: '#fff'
      },
      ...paletteColor,
      // Custom Styles for Personal Page Layout
      banner: {
        textAlign: 'center',
        padding: '50px 0',
        backgroundColor: '#f5f5f5'
      },
      inner: {
        maxWidth: '800px',
        margin: '0 auto'
      },
      actions: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center'
      },
      button: {
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#007bff',
        padding: '10px 20px',
        borderRadius: '5px'
      },
      more: {
        display: 'inline-block',
        marginTop: '20px',
        textDecoration: 'none',
        color: '#007bff'
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
      }
    }
  });
}

import { createTheme } from '@mui/material/styles';
import { red, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[500]
    },
    secondary: {
      main: pink[400]
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;

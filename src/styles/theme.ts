import { createTheme, ThemeOptions } from '@mui/material/styles';

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: '#00A550', // Apple color as the primary color
      light: '#5cd16b', // A lighter variant of the apple color
      dark: '#278133', // A darker variant of the apple color
    },
    secondary: {
      main: '#f3f4ee', // Green white as the secondary color
      light: '#f8f9f3', // Lighter variant of green white
      dark: '#bfc0ba', // Darker variant of green white
    },
    background: {
      default: '#f3f4ee', // Green white as the default background color
      paper: '#ffffff',   // White background for cards and paper components
    },
    text: {
      primary: '#1b1b1a', // Black text as the primary color
      secondary: '#6b6b6b', // Gray as the secondary text color
    },
    success: {
      main: '#00A550', // Apple green for success messages or indicators
    },
    error: {
      main: '#e74c3c', // Red color for errors (keeping default red)
    },
    warning: {
      main: '#f39c12', // Orange color for warnings
    },
    info: {
      main: '#3498db', // Blue color for informational messages
    },
    grey: {
      500: '#6b6b6b', // Custom gray color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
        },
      },
    },
  },
});

export default theme;

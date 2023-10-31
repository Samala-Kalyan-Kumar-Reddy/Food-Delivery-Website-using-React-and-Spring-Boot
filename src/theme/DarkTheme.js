import { createTheme} from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#e91e63"
        },
        secondary: {
            main: "#5A20CB"
        },
        black: {
            main: "#242B2E"
        },
        background: {
            main: "#000000",  // Background color in hexadecimal format
            default: "#0D0D0D", // Corrected background color value
            paper: "#0D0D0D"    // Corrected paper color value
        },
        textColor: {
            main: "#111111"
        }
    }
});

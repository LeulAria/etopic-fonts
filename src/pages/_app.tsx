import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Appbar from "../components/Layout/Appbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

const drawerWidth = 340;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));


function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let theme = createTheme({
    palette: {
      primary: {
        light: "#174EA6",
        main: "#1660c1",
        dark: "#174EA6",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
    typography: {
      fontFamily: `Inter, 'Roboto Flex', Poppins, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      h5: {
        fontWeight: 500,
        fontSize: 26,
        letterSpacing: 0.5,
      },
    },
    shape: {
      borderRadius: 4
    },
    mixins: {
      toolbar: {
        minHeight: 48,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Main sx={{ padding: 0 }} open={open}>
          <Appbar handleDrawerOpen={handleDrawerOpen} />

          <div className="min-h-[calc(100vh-50px)]">
            <Component {...pageProps} />
          </div>

          <footer className="bg-gray-100 flex flex-col">
            <div className="flex justify-between flex-grow mx-[3%] my-8 min-h-[230px]">
              <div>
                <h1 className="text-2xl">
                  <span className="font-[900] mr-3">ET</span>etopic{"  "}
                  <span className="font-[500]">Fonts</span>
                </h1>
                <div className="mt-10 max-w-[500px] text-gray-700">
                  Fonts Google Fonts is a library of 1,424 open source font
                  families and APIs for convenient use via CSS and Android. The
                  library also has delightful and beautifully crafted icons for
                  common actions and items. Download them for use in your digital
                  products for Android, iOS, and web.
                </div>
              </div>
              <div className="">links</div>
            </div>
            <Divider />
            <div className="h-[80px] flex items-center mx-[3%]">
              <h1>
                <span className="font-[900] mr-3">ET</span>etopic{"  "}
                <span className="font-[500]">Fonts</span>
              </h1>
            </div>
          </footer>
        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader sx={{ height: 71 }}>
            <div className="flex w-full items-center justify-between mx-5">
              <div>
                <h3 className="text-lg font-[500]">Selected family</h3>
              </div>
              <div>
                <IconButton onClick={handleDrawerClose}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
          </DrawerHeader>
          <Divider />
          <div className="h-full flex flex-col items-center justify-center">
            <h3 className="-mt-10 text-4xl text-black">¯\_(ツ)_/¯</h3>
            <p className="mt-4 text-lg text-black max-w-[270px] mx-auto">
              You don’t have any fonts yet. Choose a style to get started.
            </p>
          </div>
        </Drawer>
      </Box>
    </ThemeProvider>
  );

}

export default MyApp

import * as React from "react";
import Box from "@mui/material/Box";
import Appbar from "../Layout/Appbar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, ButtonGroup, Card, Grid } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import { fontSize } from "@mui/system";

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

export default function SelectedFontsDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Main sx={{ padding: 0 }} open={open}>
        <Appbar handleDrawerOpen={handleDrawerOpen} />
        <DrawerHeader />
        <div className="mx-[3%]">
          <div className="mx-[1%]">
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">1424 of 1424 families</p>
              <div>
                <ButtonGroup
                  size="small"
                  sx={{
                    borderColor: "#555 !important",
                  }}
                  variant="outlined"
                  aria-label="outlined button group"
                >
                  <Button sx={{ color: "#555" }}>
                    <CalendarViewMonthIcon />
                  </Button>
                  <Button sx={{ color: "#555" }}>
                    <ViewListOutlinedIcon />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>

          <Grid container>
            {Array(10)
              .fill(0)
              .map((p, i) => (
                <Grid item xs={12} md={6} lg={4} key={i}>
                  <Card
                    elevation={0}
                    variant="outlined"
                    sx={{
                      aspectRatio: "4 / 3",
                      margin: "2.8%",
                      padding: ".9rem",
                      borderRadius: 2,
                    }}
                  >
                    <div className="flex justify-between">
                      <div>
                        <h2 className="text-lg font-[400]">Font Family</h2>
                        <p className="text-sm text-gray-500">Font Author</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">12 styles</p>
                      </div>
                    </div>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "2.4rem",
                      }}
                      className="mt-5"
                    >
                      Almost before we know it, we had left the ground
                    </div>
                  </Card>
                </Grid>
              ))}
          </Grid>

          <div className="h-[60px]"></div>
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
        <DrawerHeader sx={{ height: 76 }}>
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
  );
}

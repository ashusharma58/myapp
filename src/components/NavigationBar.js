import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NavigationBar = ({ showSettings, showBack }) => {
  const { t } = useTranslation();
  const settings = [
    { name: "Favourite Features", path: "favourite" },
    { name: "Choose Language", path: "languauge" },
    { name: "Tutorials", path: "tutorials" },
    { name: "Logout", path: "logout" },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Grid
      container
      style={{ backgroundColor: "#FFFBFE" }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={48}
        width={48}
      >
        {showBack && <ArrowBackIcon onClick={() => window.history.go(-1)} />}
      </Grid>
      <Grid>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography
            fontFamily={"rubik"}
            color={"#6A4EBC"}
            fontSize={36}
            fontWeight={400}
          >
            POWER
          </Typography>
        </Box>
      </Grid>
      <Grid
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {showSettings && (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <SettingsIcon style={{ padding: 10 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              style={{
                backgroundColor: "#FFFBFE !important",
                borderRadius: "4px",
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
export default NavigationBar;

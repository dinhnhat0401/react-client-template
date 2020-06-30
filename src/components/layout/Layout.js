import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "../AppBar/index";
import Footer from "../Footer/index";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#3f51b5",
    backgroundImage: "linear-gradient(-225deg, #3db0ef, #5e5bb7)",
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
}));

function Layout(props) {
  const { hero, data, children } = props;
  const [userSettings, setUserSettings] = React.useState({ open: false });
  const s = useStyles();

  function openUserSettings() {
    setUserSettings({ open: true, key: Date.now() });
  }

  function closeUserSettings() {
    setUserSettings({ open: false });
  }

  return (
    <React.Fragment>
      <AppBar />
      {hero && (
        <div className={s.background}>
          <div className={s.toolbar} />
          {hero}
        </div>
      )}
      {!hero && <div className={s.toolbar} />}
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;

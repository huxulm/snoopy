import React from "react";
import Person from "@material-ui/icons/PersonOutline";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import SignInButton from "app/pages/common/SignInButton";
import { ProfileImg } from "../../../common/UserMenu/elements";
import SignOutIcon from "app/components/Icons/signOut";

export default ({ store, signals }) => {
  const { jwt, user } = store;
  if (jwt && user) {
    return (
      <ListItem
        onClick={() => {
          signals.logOutClicked();
        }}
      >
        <Avatar>
          <SignOutIcon height="1em" width="1em" />
        </Avatar>
        <ListItemText primary={`Sign Out`} />
      </ListItem>
    );
  }
  return null;
};

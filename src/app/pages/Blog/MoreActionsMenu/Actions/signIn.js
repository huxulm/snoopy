import React from "react";
import Person from "@material-ui/icons/PersonOutline";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import SignInButton from "app/pages/common/SignInButton";


export default () => {
  return (
    <ListItem>
      <Avatar>
        <Person color={"default"} />
      </Avatar>
      <SignInButton />
    </ListItem>
  );
};

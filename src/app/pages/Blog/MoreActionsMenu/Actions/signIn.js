import React from "react";
import Person from "@material-ui/icons/PersonOutline";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import SignInButton from "app/pages/common/SignInButton";
import { ProfileImg } from "../../../common/UserMenu/elements";
import history from "app/utils/history";


export default ({ store }) => {
  const { jwt, user } = store;
  if (jwt && user) {
    return (
      <ListItem onClick={() => {
        history.push('/about');
      }}>
        <Avatar>
          <ProfileImg src={user.avatarUrl} height={25} width={25}/>
        </Avatar>
        <ListItemText primary={user.name} />
      </ListItem>
    );
  }
  return (
    <ListItem>
      <Avatar>
        <Person color={"default"} />
      </Avatar>
      <SignInButton />
    </ListItem>
  );
};

import React from "react";
import EditTwoTone from "@material-ui/icons/EditTwoTone"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

export default () => {
  return (
    <ListItem>
      <Avatar>
        <EditTwoTone color={"default"} />
      </Avatar>
      <ListItemText primary="新笔记" color="white"></ListItemText>
    </ListItem>
  );
};

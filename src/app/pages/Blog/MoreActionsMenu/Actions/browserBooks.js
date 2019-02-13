import React from "react";
import Book from "@material-ui/icons/BookOutlined";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


export default () => {
  return (
    <ListItem>
      <Avatar>
        <Book color={"default"} />
      </Avatar>
      <ListItemText primary="GIT BOOKs" style={{ color: 'white' }}></ListItemText>
    </ListItem>
  );
};
import React from "react";
import Tool from "@material-ui/icons/BuildOutlined";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


export default () => {
  return (
    <ListItem>
      <Avatar>
        <Tool color={"default"} />
      </Avatar>
      <ListItemText primary="工具集" style={{ color: 'white' }}></ListItemText>
    </ListItem>
  );
};

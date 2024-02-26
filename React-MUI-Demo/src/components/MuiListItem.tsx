import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";

const MuiListItem = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
          <ListItemIcon>
           <ListItemAvatar>
            <Avatar>
            <MailIcon />
            </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText secondary="Vinoth">hello</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>hello</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>hello</ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiListItem;

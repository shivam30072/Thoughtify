import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Search } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import IconStyling from "../IconStyling/IconStyling";

const Sidebar = () => {
  return (
    <Box>
      <Box>
        <IconStyling Icon={HomeIcon} title="Home" />
        <IconStyling Icon={Search} title="Explore" />
        <IconStyling Icon={NotificationsNoneIcon} title="Notifications" />
        <IconStyling Icon={MailOutlineIcon} title="Messages" />
        <IconStyling Icon={PersonOutlineIcon} title="Profile" />
      </Box>
    </Box>
  );
};

export default Sidebar;

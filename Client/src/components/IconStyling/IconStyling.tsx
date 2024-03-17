import { Box, Tooltip } from "@mui/material";
import React from "react";

type props = {
  Icon: React.ElementType;
  title: string;
};
const IconStyling = (props: props) => {
  const { Icon, title } = props;
  return (
    <Box
      sx={{
        "&:hover": {
          bgcolor: "#ececec",
          cursor: "pointer",
        },
        p: "12px",
        borderRadius: "50%",
      }}
    >
      <Tooltip title={title}>
        <Icon sx={{ width: "32px", height: "32px" }} />
      </Tooltip>
    </Box>
  );
};

export default IconStyling;

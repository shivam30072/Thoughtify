import { ArrowBack, Psychology, SettingsOutlined } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

type Props = {};

const Header = (props: Props) => {
  const [feed, setFeed] = useState("");

  const handleChangeFeed = (type: string) => {
    localStorage.setItem("feed", type);
    setFeed(type);
  };

  useEffect(() => {
    const feedType = localStorage.getItem("feed");

    if (feedType) {
      setFeed(feedType);
    } else {
      setFeed("for you");
    }
  }, []);
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
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
          <Psychology sx={{ width: "32px", height: "32px" }} />
        </Box>
      </Box>
      <Box
        ml={"16px"}
        display={"flex"}
        flex={1}
        border={"1px solid #eff3f4"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box display={"flex"} justifyContent={"space-around"} flex={1}>
          <Box
            onClick={() => handleChangeFeed("for you")}
            display={"flex"}
            justifyContent={"center"}
            px={"24px"}
            sx={{
              "&:hover": {
                transition: "bgcolor 0.3s ease",
                bgcolor: "#ececec",
                cursor: "pointer",
              },
            }}
            flex={1}
          >
            <Typography
              borderBottom={feed === "for you" ? "3px solid #1d9bf0" : ""}
              color={feed === "for you" ? "black" : "#536471"}
              fontWeight={"bolder"}
              py={"20px"}
            >
              For you
            </Typography>
          </Box>

          <Box
            onClick={() => handleChangeFeed("following")}
            display={"flex"}
            flex={1}
            justifyContent={"center"}
            px={"24px"}
            sx={{
              "&:hover": {
                transition: "bgcolor 0.3s ease",
                bgcolor: "#ececec",
                cursor: "pointer",
              },
            }}
          >
            <Typography
              py={"20px"}
              borderBottom={feed === "following" ? "3px solid #1d9bf0" : ""}
              color={feed === "following" ? "black" : "#536471"}
              fontWeight={"bolder"}
            >
              Following
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          p={"8px"}
          sx={{
            "&:hover": {
              bgcolor: "#ececec",
              cursor: "pointer",
            },
          }}
          borderRadius={"50%"}
        >
          <Tooltip title="settings">
            <SettingsOutlined />
          </Tooltip>
        </Box>
      </Box>

      {/* --------------------------SEARCH INPUT------------------------- */}

      <SearchInput />
    </Box>
  );
};

export default Header;

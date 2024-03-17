import {
  AccountCircle,
  Psychology,
  SettingsOutlined,
} from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";
import { useEffect } from "react";
import SearchInput from "./SearchInput";
import { useAppDispatch } from "../../hooks";
import { activeFeed, setFeed } from "../../Redux/actions/ActiveFeedSlice";
import { useSelector } from "react-redux";
import IconStyling from "../IconStyling/IconStyling";

const Header = () => {
  const feed = useSelector(activeFeed);

  const dispatch = useAppDispatch();

  const handleChangeFeed = (type: string) => {
    localStorage.setItem("feed", type);
    dispatch(setFeed(type));
  };

  useEffect(() => {
    const feedType = localStorage.getItem("feed");

    if (feedType) {
      dispatch(setFeed(feedType));
    } else {
      dispatch(setFeed("for you"));
    }
  }, []);

  return (
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
      {/* --------------------------SIDEBAR------------------------- */}

      <Box
        display={{ xs: "none", md: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        // bgcolor={"lightblue"}
        px={{ xs: 0, md: 2 }}
      >
        <IconStyling Icon={Psychology} title="" />
      </Box>

      {/* --------------------------MAIN SECTION------------------------- */}

      <Box
        display={{ xs: "flex", md: "none" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
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
          <AccountCircle sx={{ width: "32px", height: "32px" }} />
        </Box>
      </Box>
      <Box
        ml={{ xs: "none" }}
        display={"flex"}
        flex={1}
        border={{ xs: "none", md: "1px solid #eff3f4" }}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box display={"flex"} justifyContent={"space-around"} flex={1}>
          <Box
            onClick={() => handleChangeFeed("for you")}
            display={"flex"}
            justifyContent={"center"}
            px={"24px"}
            pb={"2px"}
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
              borderBottom={feed === "for you" ? "4px solid #1d9bf0" : ""}
              color={feed === "for you" ? "black" : "#536471"}
              fontWeight={"bolder"}
              py={"20px"}
              fontFamily={'Montserrat", sans-serif'}
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
            pb={"2px"}
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
              borderBottom={feed === "following" ? "4px solid #1d9bf0" : ""}
              color={feed === "following" ? "black" : "#536471"}
              fontWeight={"bolder"}
            >
              Following
            </Typography>
          </Box>
        </Box>
        <Box
          display={{ xs: "none", md: "flex" }}
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

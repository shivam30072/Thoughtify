import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useState } from "react";

type Props = {};

const SearchInput = (props: Props) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };
  return (
    <Box
      p={"8px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flex={0.5}
      position={"relative"}
    >
      <Box position={"absolute"} left={24} bottom={18}>
        <Search sx={{ color: focused ? "#007bff" : "#536471" }} />
      </Box>
      <input
        type="text"
        placeholder="Search"
        style={{
          color: focused ? "black" : "#7c7c7c",
          border: focused ? "1px solid #007bff" : "none",
          backgroundColor: focused ? "#ffffff" : "#eff3f4",
          fontSize: "16px",
          padding: "16px 48px",
          outline: "none",
          borderRadius: "24px",
          width: "100%",
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Box>
  );
};

export default SearchInput;

import { Box, Container } from "@mui/material";
import { Children } from "react";
import Sidebar from "../Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

const SecondaryLayout = ({ children }: Props) => {
  return (
    <Box>
      <Container>
        <Box display={"flex"}>
          <Box>
            <Sidebar />
          </Box>
          <Box>{children}</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SecondaryLayout;

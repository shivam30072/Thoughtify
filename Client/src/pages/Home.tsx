import { Box } from "@mui/material";
import Primarylayout from "../components/layouts/Primarylayout";
import Sidebar from "../components/Sidebar/Sidebar";
import MainSection from "../components/MainSection/MainSection";
import SideSection from "../components/SideSection/SideSection";

const Home = () => {
  return (
    <Primarylayout>
      <Box display={"flex"}>
        <Box px={{ xs: 0, md: 2 }}>
          <Sidebar />
        </Box>
        <Box display={"flex"}>
          <MainSection />
        </Box>
        <Box display={"flex"}>
          <SideSection />
        </Box>
      </Box>
    </Primarylayout>
  );
};

export default Home;

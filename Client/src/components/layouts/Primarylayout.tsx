import { Box, Container } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";

type Props = {
  children: React.ReactNode;
};

const Primarylayout = ({ children }: Props) => {
  return (
    <Box>
      <Container sx={{ pl: "0px", pr: "0px" }}>
        <Header />
        {children}
        {/* <Footer /> */}
      </Container>
    </Box>
  );
};

export default Primarylayout;

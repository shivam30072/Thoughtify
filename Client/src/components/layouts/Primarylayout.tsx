import { Box, Container } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";

type Props = {
  children: React.ReactNode;
};

const Primarylayout = ({ children }: Props) => {
  return (
    <Box>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Primarylayout;

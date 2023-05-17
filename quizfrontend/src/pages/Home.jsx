import React from "react";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import MainStudentArea from "../components/MainStudentArea";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box minH='100vh' minW='100vw' bgColor='gray.100'>
      <NavBar />
      <MainStudentArea />
      <Footer />
    </Box>
  );
};

export default Home;

import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import QuestionNumber from "./QuestionNumber";

const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      bgColor={"gray.200"}
      minW="100%"
      minH="80px"
      display="flex"
      justifyContent='space-between'
      alignItems="center"
      p="2"
    >
      <Box display='flex' alignItems="center">
        <Text fontWeight="bold">Questions :</Text>
        <Box
          display="flex"
          alignItems="center"
          p="2"
          gap={2}
          width={{ base: "25%", md: "40%", lg: "50%" }}
          overflow="scroll"
          bgColor='red.300'
          className="scrollbar-hide"
        >
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
          <QuestionNumber />
        </Box>
        <Button ml={12}>Next</Button>
      </Box>
    </Box>
  );
};

export default Footer;

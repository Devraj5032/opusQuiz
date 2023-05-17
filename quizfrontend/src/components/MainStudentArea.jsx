import React from 'react'
import SideBar from './SideBar'
import QuizArea from './QuizArea'
import { Box } from '@chakra-ui/react'

const MainStudentArea = () => {
  return (
    <Box display='flex' flexDir={{base: 'column' , md: 'column' , lg: 'row'}} justifyContent='center'>
        <SideBar />
        <QuizArea />
    </Box>
  )
}

export default MainStudentArea
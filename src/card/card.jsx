import './card.scss';
import {
  Box
} from "@chakra-ui/react";

export function Card(props) {


  return (
    <Box h="300px" w="200px">
      <Box w="100%" h="30px">
        {props.title}
      </Box>

      <Box w="100%" h="150px">
        {props.message}
      </Box>

      <Box w="100%" h="20px">

      </Box>
    </Box>
  )
}
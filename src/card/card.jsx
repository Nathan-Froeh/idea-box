import './card.scss';
import {
  Box
} from "@chakra-ui/react";

export function Card(props) {
  const {card} = props;
  console.log('props', props)

  return (
    <Box h="300px" w="200px">
      <Box w="100%" h="30px">
        {card.title}
      </Box>

      <Box w="100%" h="150px">
        {card.message}
      </Box>

      <Box w="100%" h="20px">

      </Box>
    </Box>
  )
}
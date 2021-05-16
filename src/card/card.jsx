import './card.scss';
import React, { useContext } from 'react';
import { Context } from '../Store/Store';
import {
  Box,
  Heading,
  Text,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import {
  StarIcon,
  EditIcon,
  DeleteIcon,
} from "@chakra-ui/icons"


export function Card(props) {
  const {dispatch} = useContext(Context);
  const {card} = props;
  console.log('props', props)
  const yellow = "#FFD712";
  const starColor = () => {
    if(card.favorite) return yellow
    return 'black'
  };

  const toggleFavorite = () => {
    dispatch({type: 'TOGGLE-FAVORITE', payload: card})
  }

  return (
    <Box h="200px" w="200px" p="5px 10px" m="20px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box w="100%" h="30px" display="flex" flexDirection="row" justifyContent="space-between">
        <Heading as="h3" size="l">{card.title}</Heading>
        <Tooltip label="Favorite"> 
          <IconButton icon={<StarIcon/>} size="xs" color={starColor()} onClick={() => toggleFavorite()}></IconButton>
        </Tooltip>
      </Box>

      <Box w="100%" h="calc(100% - 54px)" overflow="scroll">
        <Text>{card.message}</Text>
        
      </Box>

      <Box w="100%" h="24px" display="flex" flexDirection="row" justifyContent="space-between">
        <Tooltip label="Edit">
          <IconButton icon={<EditIcon/>} size="xs"></IconButton>
        </Tooltip>
        <Tooltip label="Delete"> 
          <IconButton icon={<DeleteIcon/>} size="xs"></IconButton>
        </Tooltip>

      </Box>
    </Box>
  )
}
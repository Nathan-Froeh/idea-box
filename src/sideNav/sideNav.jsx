import './sideNav.scss';
import { 
  Box,
  Button,
} from "@chakra-ui/react"

export function SideNav() {
  return (
    <Box className="side-nav" w='300px'>
      

      <Box>
        <Button colorScheme="blue" variant="outline">Clear</Button>
        <Button colorScheme="blue" variant="solid">Create</Button>
      </Box>
    </Box>
  )
}


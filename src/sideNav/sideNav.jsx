import './sideNav.scss';
import { 
  Box,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react"

export function SideNav() {
  return (
    <Box className="side-nav" w='300px'>
      

      <Box>
        <Input placeholder="Title" /> 
        <Textarea placeholder="Message" /> 
      </Box>
      <Box>
        <Button colorScheme="blue" variant="outline">Clear</Button>
        <Button colorScheme="blue" variant="solid">Create</Button>
      </Box>
    </Box>
  )
}


import './topNav.scss';
import { Box } from "@chakra-ui/react"

export function TopNav() {
  return (
    <Box className="top-nav" h='70px' w='100%'>
      <Box h='5px' bg='#FF6347'></Box>
      
      <Box className="top-nav-content">
        <h2>IdeaBox</h2>

      </Box>

    </Box>
  )
}

export default TopNav;
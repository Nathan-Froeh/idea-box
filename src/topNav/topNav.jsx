import './topNav.scss';
import { Box } from "@chakra-ui/react"

export function TopNav() {
  return (
    <Box className="top-nav" h={70}>
      <Box h={5} bg='#FF6347'></Box>
      
      <Box className="top-nav-content">
        <h2>IdeaBox</h2>

      </Box>

    </Box>
  )
}

export default TopNav;
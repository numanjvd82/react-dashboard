import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar/Sidebar';
import DarkModeButton from './DarkModeButton';

const Header = () => (
  <Box>
    <Flex justify="space-between">
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <DarkModeButton />
      </Box>
    </Flex>
  </Box>
);

export default Header;

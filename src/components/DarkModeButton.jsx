import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      // * onOpen sets the truthy value to open the sidebar and is supplied to our sidebar button
      onClick={toggleColorMode}
      m={2}
      colorScheme="gray"
      aria-label="Toggle Color Mode"
      icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
    />
  );
};

export default DarkModeButton;

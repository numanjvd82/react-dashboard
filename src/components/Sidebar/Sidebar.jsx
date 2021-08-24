import { IconButton, useDisclosure } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import DrawerComp from '../Drawer/Drawer';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        m={2}
        colorScheme="teal"
        aria-label="Open Sidebar"
        icon={<GiHamburgerMenu />}
      />

      {isOpen && <DrawerComp onOpen={onOpen} onClose={onClose} isOpen={isOpen} />}
    </>
  );
};

export default Sidebar;

// * importing chakra component //
import { IconButton, useDisclosure } from '@chakra-ui/react';
// * importing Icons //
import { GiHamburgerMenu } from 'react-icons/gi';
// * importing Sidebar Component
import DrawerComp from '../Drawer/Drawer';

const Sidebar = () => {
  // * these vars are being destructured from the useDisclosure hook which is responsible for opening and closing the sidebar: //
  // ? isOpen: tells us the sidebar state, onOpen: () => open the sidebar, onClose: () => close the sidebar //
  // ! more info on chakra ui documentation
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        // * onOpen sets the truthy value to open the sidebar and is supplied to our sidebar button
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

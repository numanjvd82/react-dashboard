import PropTypes from 'prop-types';
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Text,
} from '@chakra-ui/react';
import SidebarBody from '../Sidebar/SidebarBody';

const DrawerComp = ({ isOpen, onOpen, onClose }) => (
  <Drawer
    isFullHeight="true"
    placement="left"
    size="xs"
    isOpen={isOpen}
    onOpen={onOpen}
    onClose={onClose}
  >
    <DrawerContent>
      <DrawerHeader borderBottomWidth="1px">
        Dashboard
        <DrawerCloseButton />
      </DrawerHeader>
      <DrawerBody>
        <SidebarBody />
      </DrawerBody>
      <Divider />
      <DrawerFooter>
        <Text fontSize="1rem" fontWeight="semibold">
          Copyright &copy;
          {` ${new Date().getFullYear()} `}
          by Numan Javed
        </Text>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

DrawerComp.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default DrawerComp;

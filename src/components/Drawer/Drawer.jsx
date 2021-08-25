import PropTypes from 'prop-types';
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@chakra-ui/react';

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
        <h1>Hello world</h1>
      </DrawerBody>
      <Divider />
      <DrawerFooter>
        <Button variant="ghost" bgColor="gray.400">
          Proceed to Checkout
        </Button>
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

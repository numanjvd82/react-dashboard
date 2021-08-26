// * importing Chakra UI components
import { List, ListIcon, ListItem, Text } from '@chakra-ui/react';

// * importing our icons,

// * importing react router
import { Link } from 'react-router-dom';

// * importing sidebar routes
import { sidebarRoutes } from './SidebarRoutes';

const SidebarBody = () => (
  <>
    <List spacing={3}>
      {sidebarRoutes.map(({ path, icon, name, id }) => (
        <Link to={path}>
          <ListItem
            key={id}
            _hover={{
              filter: `brightness(120%)`,
              transform: 'scaleX(1.05) translateY(-3px)',
              backfaceVisibility: 'hidden',
              boxShadow: '-4px 38px 60px -15px rgba(0,0,0,0.37)',
            }}
            transition="all 0.3s"
            borderRadius={2}
            fontSize="1.2rem"
            bgColor="teal"
            px={1}
            py={2}
            my={2}
          >
            <ListIcon mx={1} w={7} h={7} color="white">
              {icon}
            </ListIcon>
            <Text mx={1} as="span" fontWeight="semibold" color="white">
              {name}
            </Text>
          </ListItem>
        </Link>
      ))}
    </List>
  </>
);

export default SidebarBody;

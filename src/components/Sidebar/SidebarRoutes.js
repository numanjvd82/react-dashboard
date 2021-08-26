// * these are the sidebar navigation routes. You can add your own custom routes here.
// * importing uuid is required for unique route id's across the entire app
import { v4 as uuidv4 } from 'uuid';
// ? I am using react-icons in the app
// ? remember to import the icons which you are using in the sidebarRoutes.jsx
import { BsChatQuoteFill, BsCalendarFill } from 'react-icons/bs';
import { HiClipboardCheck } from 'react-icons/hi';

const sidebarRoutes = [
  {
    id: uuidv4(),
    path: '/todos',
    name: 'Todos',
    icon: <HiClipboardCheck />,
  },
  {
    id: uuidv4(),
    path: '/calendar',
    name: 'Calender',
    icon: <BsCalendarFill />,
  },
  {
    id: uuidv4(),
    path: '/chat',
    name: 'Chat',
    icon: <BsChatQuoteFill />,
  },
];

export { sidebarRoutes };

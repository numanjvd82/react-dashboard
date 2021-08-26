// * these are the sidebar navigation routes. You can add your own custom routes here.
// ? I am using react-icons in the app
// ? remember to import the icons which you are using in the sidebarRoutes.jsx
import { BsChatQuoteFill, BsCalendarFill } from 'react-icons/bs';
import { HiClipboardCheck } from 'react-icons/hi';

const sidebarRoutes = [
  {
    id: 1,
    path: '/todos',
    name: 'Todos',
    icon: <HiClipboardCheck />,
  },
  {
    id: 2,
    path: '/calendar',
    name: 'Calender',
    icon: <BsCalendarFill />,
  },
  {
    id: 3,
    path: '/chat',
    name: 'Chat',
    icon: <BsChatQuoteFill />,
  },
];

export { sidebarRoutes };

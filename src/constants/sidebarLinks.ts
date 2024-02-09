import ICONS from './icons';
import { ISidebarLink } from './types';

const SidebarLinks: ISidebarLink[] = [
  {
    title: 'Home',
    path: '/',
    icon: ICONS.homeOutline,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: ICONS.hashtag,
  },
  {
    title: 'Notification',
    path: '/notification',
    icon: ICONS.notification,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: ICONS.messages,
  },
  {
    title: 'Bookmarks',
    path: '/bookmarks',
    icon: ICONS.bookmarks,
  },
  {
    title: 'Lists',
    path: '/lists',
    icon: ICONS.lists,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: ICONS.profileOutline,
  },
  {
    title: 'More',
    path: '/more',
    icon: ICONS.more,
  },
];

export default SidebarLinks;

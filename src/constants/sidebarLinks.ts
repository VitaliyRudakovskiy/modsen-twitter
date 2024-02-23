import ICONS from './icons';
import { ISidebarLink } from './types';

const SidebarLinks: ISidebarLink[] = [
  {
    title: 'Home',
    path: '/',
    icon: ICONS.homeOutline,
    iconDark: ICONS.homeFill,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: ICONS.hashtag,
    iconDark: ICONS.hashtagBald,
  },
  {
    title: 'Notification',
    path: '/notification',
    icon: ICONS.notification,
    iconDark: ICONS.notificationDark,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: ICONS.messages,
    iconDark: ICONS.messagesDark,
  },
  {
    title: 'Bookmarks',
    path: '/bookmarks',
    icon: ICONS.bookmarks,
    iconDark: ICONS.bookmarksDark,
  },
  {
    title: 'Lists',
    path: '/lists',
    icon: ICONS.lists,
    iconDark: ICONS.listsDark,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: ICONS.profileOutline,
    iconDark: ICONS.profileFill,
  },
  {
    title: 'More',
    path: '/more',
    icon: ICONS.more,
    iconDark: ICONS.moreDark,
  },
];

export default SidebarLinks;

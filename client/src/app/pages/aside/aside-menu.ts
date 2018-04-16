import {AsideMenuInterface} from './aside-menu.interface'
export const MENU_ITEMS: AsideMenuInterface[] = [
  {
    title: 'Dashboard',
    icon: 'fa-tachometer-alt',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Posts',
    icon: 'fa-clipboard',
    link: '/pages/posts',
    children: [
       {
        title: 'All Posts',
        link: '/pages/posts/all',
      },
      {
        title: 'Create new posts',
        link: '/pages/posts/create',
      }
    ],
  },{
    title: 'Datasets',
    icon: 'fa-database',
    link: '/pages/datasets',
    children: [
       {
        title: 'My data',
        link: '/pages/datasets/',
      }
    ],
  }
];

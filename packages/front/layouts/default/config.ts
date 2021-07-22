import { Role } from '@hb/types';

interface SidebarItemDivider {
  isDivider: boolean;
  acl?: Role[];
}

interface SidebarItemGroup {
  title: string;
  icon?: string;
  acl?: Role[];
  // eslint-disable-next-line
  items: SidebarItem[];
}

interface SidebarItemLink {
  title: string;
  icon?: string;
  acl?: Role[];
  to: string;
}

export type SidebarItem =
  | SidebarItemDivider
  | SidebarItemGroup
  | SidebarItemLink;

export const sidebar: SidebarItem[] = [
  {
    title: 'Главная',
    to: '/',
  },
  {
    title: 'Породы',
    icon: 'fa-paw',
    acl: [Role.Admin],
    items: [
      {
        title: 'Группы пород',
        to: '/admin/breed-groups',
      },
      {
        title: 'Породы',
        to: '/admin/breeds',
      },
    ],
  },
];

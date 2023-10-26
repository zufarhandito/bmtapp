import dynamic from 'next/dynamic';
export const AnnouncementCard = dynamic(() => import('./AnnouncementCard'));
export const AnnouncementDrawer = dynamic(() => import('./AnnouncementDrawer'));
export const AnnouncementHeader = dynamic(() => import('./AnnouncementHeader'));
export const AnnouncementList = dynamic(() => import('./AnnouncementList'));

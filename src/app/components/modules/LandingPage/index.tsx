import dynamic from 'next/dynamic';

export const Hero = dynamic(() => import('./Hero/Hero'));
export const Profile = dynamic(() => import('./Profile/Profile'));
export const AnnouncementHomePage = dynamic(
  () => import('./Announcement/AnnouncementHomePage'),
);

export const ArticleHomePage = dynamic(
  () => import('./Article/ArticleHomePage'),
);

export const ServicesHomePage = dynamic(
  () => import('./Layanan/ServicesHomePage'),
);

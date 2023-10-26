import dynamic from 'next/dynamic';

export const Modal = dynamic(() => import('./Modal/ModalTemplates'));
export const NavigationBack = dynamic(
  () => import('./Navigation/NavigationBack'),
);
export const Pagination = dynamic(() => import('./Pagination/Pagination'));

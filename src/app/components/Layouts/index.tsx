import dynamic from 'next/dynamic';

export const Navbar = dynamic(() => import('./Navbar/MyNavbar'));
export const Footer = dynamic(() => import('./Footer/Footer'));

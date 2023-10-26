'use client';
import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import {
  ChevronDownIcon,
  BuildingOffice2Icon,
  RocketLaunchIcon,
  HomeIcon,
  Bars3Icon,
  NewspaperIcon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  Square3Stack3DIcon,
  PhoneIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const colors: any = {
  blue: 'bg-blue-50 text-blue-500',
  orange: 'bg-orange-50 text-orange-500',
  green: 'bg-green-50 text-green-500',
  'blue-gray': 'bg-blue-gray-50 text-blue-gray-500',
  purple: 'bg-purple-50 text-purple-500',
  teal: 'bg-teal-50 text-teal-500',
  cyan: 'bg-cyan-50 text-cyan-500',
  pink: 'bg-pink-50 text-pink-500',
};

const navListMenuItems = [
  {
    color: 'blue',
    icon: FlagIcon,
    title: 'About us',
    description: 'Learn about our story and our mission statement.',
  },
  {
    color: 'orange',
    icon: ChatBubbleOvalLeftIcon,
    title: 'Press',
    description: 'News and writings, press releases, and resources',
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: 'h-6 w-6',
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
  const pathname = usePathname();
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className={`flex items-center gap-2 py-2 pr-4 ${
                pathname !== '/'
                  ? ''
                  : `text-white hover:bg-opacity-20 hover:text-white`
              }`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Layanan
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul>{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const pathname = usePathname();
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color={pathname !== '/' ? 'gray' : 'white'}
        className="font-normal"
      >
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 ${
            pathname !== '/' ? '' : 'hover:bg-opacity-20 hover:text-white'
          }`}
        >
          <HomeIcon className="h-[18px] w-[18px]" />
          Beranda
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="/#profil"
        variant="small"
        color={pathname !== '/' ? 'gray' : 'white'}
        className="font-normal"
      >
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 ${
            pathname !== '/' ? '' : 'hover:bg-opacity-20 hover:text-white'
          }`}
        >
          <BuildingOffice2Icon className="h-[18px] w-[18px]" />
          Profil
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color={pathname !== '/' ? 'gray' : 'white'}
        className="font-normal"
      >
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 ${
            pathname !== '/' ? '' : 'hover:bg-opacity-20 hover:text-white'
          }`}
        >
          <NewspaperIcon className="h-[18px] w-[18px]" />
          Publikasi
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/#kontak"
        variant="small"
        color={pathname !== '/' ? 'gray' : 'white'}
        className="font-normal"
      >
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 ${
            pathname !== '/' ? '' : 'hover:bg-opacity-20 hover:text-white'
          }`}
        >
          <CreditCardIcon className="h-[18px] w-[18px]" />
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}

export default function MyNavbar() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
        setIsMobile(false);
      } else {
        setOpenNav(false);
        setIsMobile(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar
      className={`rounded-none ${
        pathname === '/'
          ? 'absolute left-1/2 transform -translate-x-1/2'
          : 'mx-auto'
      } py-2 shadow-none z-50 border-none backdrop-blur-xl lg:backdrop-blur-0`}
      color={pathname !== '/' ? 'white' : 'transparent'}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex"></div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue">
            Sign In
          </Button>
          <Button variant="gradient" color="blue" size="sm">
            Sign Up
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue" fullWidth>
            Sign In
          </Button>
          <Button variant="gradient" size="sm" color="blue" fullWidth>
            Sign Up
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

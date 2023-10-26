import { Drawer, Typography, IconButton } from '@material-tailwind/react';
import { Pagination } from '../../Templates';
import AnnouncementHeader from './AnnouncementHeader';
import AnnouncementList from './AnnouncementList';

type Props = {
  handleDrawer: any;
  isOpen: boolean;
};

export default function AnnouncementDrawer({ handleDrawer, isOpen }: Props) {
  return (
    <Drawer
      placement="right"
      open={isOpen}
      onClose={handleDrawer}
      className="py-4 px-7"
      size={700}
    >
      <div className="w-full h-20 bg-hero-50 absolute start-0 top-0"></div>
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="white" className="z-50 mt-2">
          Pengumuman
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={handleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <article className="flex flex-col gap-7">
        <AnnouncementHeader />
        <AnnouncementList />
        <Pagination />
      </article>
    </Drawer>
  );
}

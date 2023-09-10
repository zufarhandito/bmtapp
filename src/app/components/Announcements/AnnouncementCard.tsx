import React from 'react';
import { motion } from 'framer-motion';
import { BookmarkIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';

type Props = {
  item: {
    title: string;
    isPinned: boolean;
    date: string;
    desc: string;
  };
  index: number;
};

export default function AnnouncementCard({ item, index }: Props) {
  return (
    <motion.a
      key={index}
      href=""
      initial={{
        x: 200,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: index / 2,
      }}
      className="bg-blue-gray-50 px-7 py-4 rounded-md relative"
    >
      {item.isPinned ? (
        <span>
          {' '}
          <BookmarkIcon className="h-6 w-6 absolute start-0 top-0 text-yellow-700 " />{' '}
        </span>
      ) : (
        ''
      )}
      <Typography variant="small" className="text-blue-gray-600">
        {item.date}
      </Typography>
      <Typography variant="h6" className="font-semibold">
        {item.title}
      </Typography>
    </motion.a>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperClipIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import AnnouncementModal from './AnnouncementModal';

type Props = {
  item: {
    title: string;
    image: string;
    isPinned: boolean;
    date: string;
    desc: string;
  };
  index: number;
};

export default function AnnouncementCard({ item, index }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <motion.div
        key={index}
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
        className="bg-blue-gray-50 px-4 py-3 rounded-md relative flex gap-5"
      >
        <div className="w-16 h-16 overflow-hidden">
          <Image
            src={item.image}
            alt={`${item.image}${index}`}
            width={50}
            height={50}
            className="w-full h-auto bg-cover"
          />
        </div>
        <div className="flex flex-col">
          <div onClick={handleOpenModal} className="cursor-pointer">
            <Typography
              variant="small"
              className="text-blue-gray-600 text-start"
            >
              {item.date}
            </Typography>
          </div>
          <div onClick={handleOpenModal} className="cursor-pointer">
            <Typography variant="h6" className="font-semibold">
              {item.title}
            </Typography>
          </div>
        </div>
        {item.isPinned ? (
          <span>
            {' '}
            <PaperClipIcon className="h-6 w-6 absolute -start-3 -top-3 text-hero-50 " />{' '}
          </span>
        ) : (
          ''
        )}
      </motion.div>
      <AnnouncementModal open={openModal} handleModal={handleOpenModal} />
    </>
  );
}

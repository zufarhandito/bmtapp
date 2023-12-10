import React from 'react';
import { motion } from 'framer-motion';
import { PaperClipIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import { Modal } from '../../Templates';
import useDialog from '../../../../hooks/useDialog';

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
  const { isOpen, handleDialog } = useDialog();

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
          <div onClick={handleDialog} className="cursor-pointer">
            <Typography
              variant="small"
              className="text-blue-gray-600 text-start"
            >
              {item.date}
            </Typography>
          </div>
          <div onClick={handleDialog} className="cursor-pointer">
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
      <Modal
        open={isOpen}
        handleModal={handleDialog}
        size="lg"
        data={{
          title: 'Consequat adipisicing nostrud esse deserunt enim',
          image_url: 'https://picsum.photos/700/300',
          inserted_at: '20 September 2023',
          inserted_by: 'Zufarhandito',
          body: 'Cupidatat anim do deserunt id cillum commodo duis laborum. Sint quis ad non pariatur nulla consequat amet ad amet. Laborum enim et eu labore nostrud ad sit. Nisi occaecat ut anim sit labore eu ex ut pariatur Lorem non elit culpa. Proident enim qui deserunt eu do incididunt nisi ad cillum adipisicing. Irure anim commodo culpa ut elit laborum exercitation laboris sunt adipisicing quis velit. Excepteur sit consequat dolore in laboris.Ut nostrud proident reprehenderit ad minim Lorem excepteur minim sunt cillum et dolor dolor. Cupidatat reprehenderit Lorem cupidatat sint Lorem duis velit sunt tempor. Ex quis eu nisi ad eiusmod aliqua esse nisi. Pariatur aliquip ipsum laborum occaecat irure enim Lorem cupidatat consequat sint magna in excepteur. Eu tempor minim magna occaecat incididunt sunt cupidatat deserunt.Eiusmod laboris esse sunt id labore laboris. In occaecat sit ad cupidatat commodo non aliqua occaecat occaecat nulla fugiat elit in. Ex enim laboris veniam ullamco aliquip ad laboris dolor sunt minim. Mollit proident et velit id irure reprehenderit eiusmod sint. Duis qui proident quis dolor qui eiusmod nisi commodo anim ea fugiat nulla deserunt tempor.Incididunt irure irure deserunt pariatur velit. Eiusmod ipsum et in ea qui enim sunt nostrud ipsum commodo eu reprehenderit tempor nulla. Dolor nostrud veniam cillum anim nulla tempor sit adipisicing. Et elit non ullamco nostrud proident ullamco dolore ad magna voluptate cillum.Laborum cupidatat fugiat est nostrud irure consequat enim exercitation elit ea ea quis excepteur quis. Ullamco Lorem exercitation Lorem ullamco ipsum cillum. Laboris officia irure anim incididunt ad commodo adipisicing esse amet nulla.',
        }}
      />
    </>
  );
}

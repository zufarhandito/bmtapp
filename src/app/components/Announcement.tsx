'use client';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Button, Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AnnouncementDrawer from './Announcements/AnnouncementDrawer';
import AnnouncementCard from './Announcements/AnnouncementCard';
import AnnouncementModal from './Announcements/AnnouncementModal';

type Props = {};

type AnnouncementType = {
  title: string;
  image: string;
  isPinned: boolean;
  date: string;
  desc: string;
};

const Announcements: AnnouncementType[] = [
  {
    title: 'Tata Cara Pendaftaran Anggota BMT Amanah',
    image: 'https://picsum.photos/200/300',
    isPinned: true,
    date: '10 Agustus 2023',
    desc: 'Officia sunt ea sunt aliquip sint culpa minim magna cillum nisi. Eiusmod magna laboris exercitation ea eu proident aliqua magna nulla. Anim sint magna occaecat sit exercitation aute deserunt cupidatat eiusmod proident ea deserunt duis. Esse culpa ex ex cillum do anim.',
  },
  {
    title:
      'Incididunt dolor et elit aliqua adipisicing sint ex quis nulla officia fugiat in.',
    image: 'https://picsum.photos/200/300',
    isPinned: false,
    date: '6 Agustus 2023',
    desc: 'Pariatur laboris ut reprehenderit officia eiusmod magna officia irure fugiat tempor ipsum velit deserunt. Ut incididunt proident anim Lorem sit nulla proident qui. In ea elit excepteur fugiat deserunt irure. Cupidatat quis consectetur et excepteur velit. Elit incididunt nisi occaecat in nostrud consectetur.',
  },
  {
    title:
      'Occaecat occaecat magna ipsum ullamco aliqua adipisicing et fugiat.',
    image: 'https://picsum.photos/200/300',
    isPinned: false,
    date: '2 Agustus 2023',
    desc: 'Consectetur commodo id id consectetur. Mollit adipisicing laborum cupidatat adipisicing eu fugiat cupidatat aute. Incididunt sit anim ullamco in. Sunt fugiat est ut cillum sint. Dolor est nisi tempor ipsum amet laboris occaecat pariatur aute do mollit. Mollit sunt commodo proident aliqua voluptate laborum nisi nostrud commodo incididunt mollit. Commodo duis labore ex cupidatat esse duis aliqua id.',
  },
];

export default function Announcement({}: Props) {
  const [isOpen, setOpen] = useState(false);

  const [size, setSize] = useState();

  const handleDrawer = () => {
    setOpen(!isOpen);
  };

  // const handleModal = (value: string) => {
  //   setSize(value);
  // };
  return (
    <section>
      <AnnouncementDrawer handleDrawer={handleDrawer} isOpen={isOpen} />
      {/* <AnnouncementModal handleModal={handleModal} size={size} /> */}
      <article className="flex flex-col gap-3 max-w-3xl mx-auto my-24 px-8 lg:px-0">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
        >
          <Typography variant="h4" className="text-center mb-4">
            Pengumuman
          </Typography>
        </motion.div>
        {Announcements.map((item, index) => (
          // <button onClick={() => handleModal} className="text-start">
          <AnnouncementCard item={item} index={index} />
          // </button>
        ))}
        <Button
          className="w-fit mx-auto my-5"
          variant="text"
          onClick={handleDrawer}
        >
          Lihat Lainnya
          <ChevronDownIcon className="w-5 h-5 mx-auto" />
        </Button>
      </article>
    </section>
  );
}

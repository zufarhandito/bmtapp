import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';

type Props = {};

type AnnouncementType = {
  title: string;
  isPinned: boolean;
  date: string;
  desc: string;
};

const Announcements: AnnouncementType[] = [
  {
    title: 'Tata Cara Pendaftaran Anggota BMT Amanah',
    isPinned: true,
    date: '10 Agustus 2023',
    desc: 'Officia sunt ea sunt aliquip sint culpa minim magna cillum nisi. Eiusmod magna laboris exercitation ea eu proident aliqua magna nulla. Anim sint magna occaecat sit exercitation aute deserunt cupidatat eiusmod proident ea deserunt duis. Esse culpa ex ex cillum do anim.',
  },
  {
    title:
      'Incididunt dolor et elit aliqua adipisicing sint ex quis nulla officia fugiat in.',
    isPinned: false,
    date: '6 Agustus 2023',
    desc: 'Pariatur laboris ut reprehenderit officia eiusmod magna officia irure fugiat tempor ipsum velit deserunt. Ut incididunt proident anim Lorem sit nulla proident qui. In ea elit excepteur fugiat deserunt irure. Cupidatat quis consectetur et excepteur velit. Elit incididunt nisi occaecat in nostrud consectetur.',
  },
  {
    title:
      'Occaecat occaecat magna ipsum ullamco aliqua adipisicing et fugiat.',
    isPinned: false,
    date: '2 Agustus 2023',
    desc: 'Consectetur commodo id id consectetur. Mollit adipisicing laborum cupidatat adipisicing eu fugiat cupidatat aute. Incididunt sit anim ullamco in. Sunt fugiat est ut cillum sint. Dolor est nisi tempor ipsum amet laboris occaecat pariatur aute do mollit. Mollit sunt commodo proident aliqua voluptate laborum nisi nostrud commodo incididunt mollit. Commodo duis labore ex cupidatat esse duis aliqua id.',
  },
];

export default function Announcement({}: Props) {
  return (
    <section>
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
        ))}
        <Button className="w-fit mx-auto my-5" variant="text">
          Lihat Lainnya
          <ChevronDownIcon className="w-5 h-5 mx-auto" />
        </Button>
      </article>
    </section>
  );
}

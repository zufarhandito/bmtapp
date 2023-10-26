import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { Button, Chip, Typography } from '@material-tailwind/react';
import React from 'react';
import { MyCarousel } from '../../../Templates/Carousel/Carousel';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

type SectionType = {
  total: string;
  caption: string;
};

const section: SectionType[] = [
  {
    total: '194',
    caption: 'Anggota',
  },
  {
    total: '1.5k+',
    caption: 'Nasabah',
  },
];

function Counts() {
  return (
    <div className="flex gap-20 w-full mt-24 mb-4 py-4 items-center text-white text-opacity-30">
      {section.map((item, index) => (
        <div key={index} className="text-center">
          <Typography variant="h4" className="font-black">
            {item.total}
          </Typography>
          <Typography variant="small">{item.caption}</Typography>
        </div>
      ))}
    </div>
  );
}

export default function Hero({}: Props) {
  // const router = useRouter();
  return (
    <header className="relative min-h-screen flex flex-col lg:flex-row bg-hero-100 text-white">
      <div className="w-full lg:w-1/2 flex flex-col justify-evenly pt-32 p-8 lg:pl-20 z-10">
        <Chip
          value="KSU BMT Amanah, Galur"
          variant="ghost"
          color="blue"
          className="w-fit text-white font-normal"
        />
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Typography variant="h1" className="mb-2">
            <span className="text-light-blue-500">Membantu</span> Anda Membangun{' '}
            <span className="border-b-4 border-light-blue-500">Usaha</span>
          </Typography>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <Typography variant="paragraph" className="w-full lg:1/2">
            BMT Amanah Galur merupakan koperasi serba usaha yang berlokasi di
            Galur, Kulon Progo
          </Typography>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-10 flex gap-2"
        >
          <Link href="#layanan">
            <Button
              color="blue"
              className="flex items-center gap-2"
              variant="gradient"
              // onClick={() => router.push('#layanan')}
            >
              Layanan
              <ArrowLongRightIcon className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
        <Counts />
      </div>
      <motion.div
        initial={{
          opacity: 0,
          x: 300,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-20 z-10"
      >
        <MyCarousel />
      </motion.div>
      <div className="absolute h-2/3 lg:h-full w-full lg:w-1/2 bg-hero-50 rounded-tl-full bottom-0 right-0 z-0"></div>
    </header>
  );
}

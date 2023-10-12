import {
  ArrowDownOnSquareStackIcon,
  ArrowUpOnSquareStackIcon,
  TruckIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

type ServiceType = {
  name: string;
  desc: string;
  icon: any;
};

const ServicesData: ServiceType[] = [
  {
    name: 'Simpanan',
    desc: 'BMT Amanah sebagai bank untuk menabung',
    icon: ArrowUpOnSquareStackIcon,
  },
  {
    name: 'Pembiayaan',
    desc: 'Membantu pembiayaan masyarakat',
    icon: ArrowDownOnSquareStackIcon,
  },
  {
    name: 'Penggaduan Sapi',
    desc: 'Membantu ekonomi masyarakat melalui ternak sapi',
    icon: TruckIcon,
  },
  {
    name: 'Lainnya',
    desc: 'Deskripsi lainnya',
    icon: WalletIcon,
  },
];

export default function Services({}: Props) {
  const handleOpenModal = () => {
    console.log('first');
  };
  return (
    <div className="-z-20 bg-hero-100 px-8 lg:px-40 py-14 relative flex flex-col lg:flex-row gap-14">
      <div className="absolute bg-hero-50 h-80 w-80 start-0 bottom-0 rounded-tr-full -z-10"></div>
      <div className="-z-10 bg-gradient-to-tr from-hero-100 to-blue-900 absolute right-0 bottom-0 h-full w-1/2 rounded-tl-full rounded-bl-full"></div>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          x: 1,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="lg:w-2/5 text-white my-auto lg:text-right"
      >
        <Typography variant="h4" className="mb-2">
          Layanan
        </Typography>
        <Typography>
          BMT Amanah menyediakan berbagai layanan untuk melayani masyarakat.
          Kami berkomitmen untuk terus meningkatkan pelayanan publik sebagai
          bentuk..
        </Typography>
      </motion.div>
      <div className="w-full lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {ServicesData.map((item, index) => (
          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <Card key={index} className="shadow-none rounded-md h-40">
              <CardBody>
                {React.createElement(item.icon, {
                  strokeWidth: 2,
                  className: 'h-7 w-7 mb-2 text-indigo-600',
                })}
                <div onClick={handleOpenModal} className="cursor-pointer">
                  <Typography variant="h6" className="mb-2">
                    {item.name}
                  </Typography>
                </div>
                <Typography variant="small">{item.desc}</Typography>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

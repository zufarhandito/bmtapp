import {
  ArrowDownOnSquareStackIcon,
  ArrowUpOnSquareStackIcon,
  TruckIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react';
import { motion } from 'framer-motion';
import useDialog from '@/hooks/useDialog';
import { Modal } from '@/app/components/Templates';

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
  const { isOpen, handleDialog } = useDialog();

  return (
    <div className=" bg-hero-100 px-8 lg:px-40 py-14 relative flex flex-col lg:flex-row gap-14">
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
      <div className="absolute bg-hero-50 h-80 w-80 start-0 bottom-0 rounded-tr-full"></div>
      <div className="bg-gradient-to-tr from-hero-100 to-blue-900 absolute right-0 bottom-0 h-full w-1/2 rounded-tl-full rounded-bl-full"></div>
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
            key={index}
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
                <button onClick={handleDialog}>
                  <Typography variant="h6">{item.name}</Typography>
                </button>
                <br />
                <button onClick={handleDialog} className="text-left">
                  <Typography variant="small">{item.desc}</Typography>
                </button>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

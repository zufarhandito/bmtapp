import { ArrowDownOnSquareStackIcon, ArrowUpOnSquareIcon, ArrowUpOnSquareStackIcon, TruckIcon, WalletIcon } from '@heroicons/react/24/outline';
import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'

type Props = {}

type ServiceType = {
    name: string;
    desc: string;
    icon: any;
}

const ServicesData: ServiceType[] = [
    {
        name: 'Simpanan',
        desc: 'BMT Amanah sebagai bank untuk menabung',
        icon: ArrowUpOnSquareStackIcon
    },
    {
        name: 'Pembiayaan',
        desc: 'Membantu pembiayaan masyarakat',
        icon: ArrowDownOnSquareStackIcon
    },
    {
        name: 'Penggaduan Sapi',
        desc: 'Membantu ekonomi masyarakat melalui ternak sapi',
        icon: TruckIcon
    },
    {
        name: 'Lainnya',
        desc: 'Deskripsi lainnya',
        icon: WalletIcon
    },
]

export default function Services({}: Props) {
  return (
    <div className='-z-20 bg-hero-100 px-40 py-14 relative flex gap-14'>
        <div className='-z-10 bg-gradient-to-tr from-hero-100 to-blue-900 absolute right-0 bottom-0 h-full w-1/2 rounded-tl-full rounded-bl-full'></div>
        <div className='w-3/5 grid grid-cols-2 gap-4'>
            {
                ServicesData.map((item,index) => (
                    <Card key={index} className="shadow-none rounded-md">
                        <CardBody>
                        {React.createElement(item.icon, {
                        strokeWidth: 2,
                        className: "h-7 w-7 mb-2 text-indigo-600",
                        })}
                        <Typography variant="h6" className="mb-2">
                            {item.name}
                        </Typography>
                        <Typography variant='small'>
                            {item.desc}
                        </Typography>
                        </CardBody>
                    </Card>
                ))
            }
        </div>
        <div className='w-2/5 text-white my-auto'>
            <Typography variant='h4' className='mb-2'>
                Layanan
            </Typography>
            <Typography>
                BMT Amanah menyediakan berbagai layanan untuk melayani masyarakat. Kami berkomitmen untuk terus meningkatkan pelayanan publik sebagai bentuk..
            </Typography>
        </div>
    </div>
  )
}
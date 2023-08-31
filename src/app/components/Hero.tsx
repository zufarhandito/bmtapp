import { ArrowLongRightIcon, ArrowRightIcon, ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline'
import { Button, Chip, Typography } from '@material-tailwind/react'
import React from 'react'
import { MyCarousel } from './Carousel'

type Props = {}

type SectionType = {
    total: string;
    caption: string;
  }
  
const section: SectionType[] = [
    {
      total: "194",
      caption: "Anggota"
    },
    {
      total: "1.5k+",
      caption: "Nasabah"
    },
  ]
  
  function Counts() {
    return (
      <div className='flex gap-20 w-full mt-24 mb-4 py-4 items-center text-white text-opacity-30'>
        {
          section.map((item,index)=>(
            <div key={index} className='text-center'>
              <Typography variant='h4' className='font-black'>
                {item.total}
              </Typography>
              <Typography variant='small'>
                {item.caption}
              </Typography>
          </div>
          ))
        }
      </div>
    )
  }

export default function Hero({}: Props) {
  return (
    <header className='h-screen flex bg-hero-100 text-white'>
        <div className='w-1/2 flex flex-col justify-evenly pt-32 pl-20'>
            <Chip value="KSU BMT Amanah, Galur" variant='ghost' color='blue' className='w-fit text-white font-normal' />
            <Typography variant='h1' className='mb-2'>
                <span className='text-light-blue-500'>Membantu</span> Anda Membangun <span className='border-b-4 border-light-blue-500'>Usaha</span>
            </Typography>
            <Typography variant='paragraph'>
                BMT Amanah Galur merupakan koperasi simpan pinjam <br /> yang berlokasi di Galur, Kulon Progo
            </Typography>
            <div className='mt-10 flex gap-2'>
                <Button color='blue' className='flex items-center gap-2' variant='gradient'>
                    Layanan
                    <ArrowLongRightIcon className='w-5 h-5' />
                </Button>
            </div>
                <Counts/>
        </div>
        <div className='w-1/2 flex items-center justify-center p-20 z-10'>
            <MyCarousel/>
        </div>
        <div className='absolute h-full w-1/2 bg-hero-50 rounded-tl-full right-0 z-0'></div>
    </header>
  )
}
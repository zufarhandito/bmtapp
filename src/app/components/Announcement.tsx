import { BookmarkIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import React from 'react'

type Props = {}

type AnnouncementType = {
    title: string;
    isPinned: boolean;
    date: string;
    desc: string;
}

const Announcements = [
    {
        title: "Tata Cara Pendaftaran Anggota BMT Amanah",
        isPinned: true,
        date: "10 Agustus 2023",
        desc: "Officia sunt ea sunt aliquip sint culpa minim magna cillum nisi. Eiusmod magna laboris exercitation ea eu proident aliqua magna nulla. Anim sint magna occaecat sit exercitation aute deserunt cupidatat eiusmod proident ea deserunt duis. Esse culpa ex ex cillum do anim."
    },
    {
        title: "Incididunt dolor et elit aliqua adipisicing sint ex quis nulla officia fugiat in.",
        isPinned: false,
        date: "6 Agustus 2023",
        desc: "Pariatur laboris ut reprehenderit officia eiusmod magna officia irure fugiat tempor ipsum velit deserunt. Ut incididunt proident anim Lorem sit nulla proident qui. In ea elit excepteur fugiat deserunt irure. Cupidatat quis consectetur et excepteur velit. Elit incididunt nisi occaecat in nostrud consectetur."
    },
    {
        title: "Occaecat occaecat magna ipsum ullamco aliqua adipisicing et fugiat.",
        isPinned: false,
        date: "2 Agustus 2023",
        desc: "Consectetur commodo id id consectetur. Mollit adipisicing laborum cupidatat adipisicing eu fugiat cupidatat aute. Incididunt sit anim ullamco in. Sunt fugiat est ut cillum sint. Dolor est nisi tempor ipsum amet laboris occaecat pariatur aute do mollit. Mollit sunt commodo proident aliqua voluptate laborum nisi nostrud commodo incididunt mollit. Commodo duis labore ex cupidatat esse duis aliqua id."
    }
]

export default function Announcement({}: Props) {
  return (
    <section>
        <article className='flex flex-col gap-3 max-w-3xl mx-auto my-44'>
            <Typography variant='h4' className='text-center mb-4'>
                Pengumuman
            </Typography>
            {
                Announcements.map((item,index)=>(
                    <div className='bg-blue-gray-50 px-7 py-4 rounded-md relative'>
                        {item.isPinned? <span> <BookmarkIcon className='h-6 w-6 absolute start-0 top-0 text-yellow-700 '/> </span>:'' }
                        <Typography variant='small' className='text-blue-gray-600'>
                            {item.date}
                        </Typography>
                        <Typography variant='h6' className='font-semibold'>
                            {item.title}
                        </Typography>
                    </div>
                ))
            }
        </article>
    </section>
  )
}
import React from 'react';
import AnnouncementCard from './AnnouncementCard';

type Props = {};

type AnnouncementType = {
  title: string;
  image: string;
  isPinned: boolean;
  date: string;
  desc: string;
};

const announcements: AnnouncementType[] = [
  {
    title: 'Tata Cara Pendaftaran Anggota BMT Amanah',
    image: 'https://picsum.photos/200/300',
    isPinned: false,
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

export default function AnnouncementList({}: Props) {
  return (
    <div className="flex flex-col gap-3 text-start">
      {announcements.map((item, index) => (
        <AnnouncementCard item={item} index={index} />
      ))}
    </div>
  );
}

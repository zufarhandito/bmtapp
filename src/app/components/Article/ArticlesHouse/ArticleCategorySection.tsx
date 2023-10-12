'use client';
import {
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from '@material-tailwind/react';
import React from 'react';

type Props = {};

type CategoryType = {
  id: number;
  name: string;
};

const categories: CategoryType[] = [
  {
    id: 1,
    name: 'Kegiatan',
  },
  {
    id: 2,
    name: 'Berita',
  },
];

export default function ArticleCategorySection({}: Props) {
  return (
    <aside className="bg-red-100">
      {categories.map((item: CategoryType, index: number) => {
        return (
          <li key={index}>
            <button>{item.name}</button>
          </li>
        );
      })}
    </aside>
  );
}

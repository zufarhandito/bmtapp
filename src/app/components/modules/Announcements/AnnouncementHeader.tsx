import React from 'react';
import { Button, Input } from '@material-tailwind/react';
import {
  BarsArrowDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

type Props = {};

export default function AnnouncementHeader({}: Props) {
  return (
    <div className="flex items-center gap-5 mt-4">
      <BarsArrowDownIcon className="w-8 h-8" />
      <Input
        label="Pencarian.."
        variant="standard"
        crossOrigin={undefined}
        icon={<MagnifyingGlassIcon />}
      />
      <Button size="sm" color="indigo" className="px-5">
        Cari
      </Button>
    </div>
  );
}

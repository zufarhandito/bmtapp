'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '@material-tailwind/react';
import React from 'react';

type Props = {};

export default function SearchInput({ ...props }) {
  return <Input crossOrigin={undefined} {...props} />;
}

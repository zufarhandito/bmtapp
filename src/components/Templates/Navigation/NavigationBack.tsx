import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  title: string;
};

export default function NavigationBack({ title }: Props) {
  const router = useRouter();
  return (
    <button
      className="pt-12 flex items-center gap-2"
      onClick={() => router.push('/')}
    >
      <ChevronLeftIcon className="w-5 h-5 text-hero-100" />
      {title}
    </button>
  );
}

import { XMarkIcon } from '@heroicons/react/24/solid';
import { Dialog } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';
import { ModalBodyType } from '../types/types';
import { size } from '@material-tailwind/react/types/components/avatar';

type Props = {
  handleModal: () => void;
  open: boolean;
  data: ModalBodyType;
  size: size | undefined;
};

export default function ModalTemplates({
  handleModal,
  open,
  data,
  size,
}: Props) {
  return (
    <Dialog open={open} handler={handleModal} size={size}>
      <section className="relative">
        <button
          className="absolute p-1 -right-4 -top-4 bg-white rounded-full"
          onClick={handleModal}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <div className="mx-auto flex justify-center">
          <Image
            className="w-full rounded-t-xl h-[300px] object-cover"
            alt="announcement_image"
            width={900}
            height={500}
            src={data.image_url}
          />
        </div>
        <article className="p-10 overflow-x-scroll max-h-[450px]">
          <p className="text-xs pb-1">20 September 2023</p>
          <h3 className="text-xl font-bold pb-3">
            {data?.title}
            {/* Lorem ipsum dolor sit amet consectetur */}
          </h3>
          <p>{data?.body}</p>
        </article>
      </section>
    </Dialog>
  );
}

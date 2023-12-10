import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';

type Props = {
  handleModal: () => void;
  open: boolean;
};

export default function LayananModal({ handleModal, open }: Props) {
  return (
    <>
      <Dialog open={open} handler={handleModal} size="md">
        <section className="relative">
          <button
            className="absolute p-1 -right-4 -top-4 bg-white rounded-full"
            onClick={handleModal}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <div className="mx-auto flex justify-center">
            <Image
              className="w-full rounded-t-xl"
              alt="announcement_image"
              width={700}
              height={300}
              src={'https://picsum.photos/700/300'}
            />
          </div>
          <article className="p-10">
            <p className="text-xs pb-1">20 September 2023</p>
            <h3 className="text-xl font-bold pb-3">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              fugiat, nam aspernatur qui, soluta in dignissimos quasi sunt eos
              perspiciatis iste at repellat dolorum dolorem cum doloremque,
              expedita repudiandae. Quibusdam!
            </p>
          </article>
        </section>
      </Dialog>
    </>
  );
}

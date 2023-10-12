'use client';
import { Carousel } from '@material-tailwind/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type ImageType = {
  src: string;
  alt: string;
  short_description: string;
};

const images: ImageType[] = [
  {
    src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    alt: 'carousel1',
    short_description: 'Deskripsi Kegiatan 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    alt: 'carousel2',
    short_description: 'Deskripsi Kegiatan 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
    alt: 'carousel2',
    short_description: 'Deskripsi Kegiatan 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    alt: 'carousel2',
    short_description: 'Deskripsi Kegiatan 4',
  },
];

export function MyCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };
  return (
    // <Carousel className="rounded-xl">
    //   <img
    //     src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    //     alt="image 1"
    //     className="h-full w-full object-cover"
    //   />
    //   <img
    //     src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    //     alt="image 2"
    //     className="h-full w-full object-cover"
    //   />
    //   <img
    //     src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    //     alt="image 3"
    //     className="h-full w-full object-cover"
    //   />
    // </Carousel>
    <>
      <button onClick={prevImage}>Previous</button>
      <AnimatePresence>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex].src}
          alt={`Image ${currentImageIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>
      <button onClick={nextImage}>Next</button>
    </>
  );
}

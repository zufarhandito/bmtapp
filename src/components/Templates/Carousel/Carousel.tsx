'use client';
import { Carousel } from '@material-tailwind/react';
import Image from 'next/image';

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
  return (
    <Carousel className="rounded-xl" autoplay>
      {images.map((image, index) => {
        return (
          <div className="relative h-full w-full " key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </Carousel>
    // <>
    //   <div className="carousel-container">
    //     <button className="prev-button" onClick={prevSlide}>
    //       Previous
    //     </button>
    //     <AnimatePresence initial={false} custom={currentIndex}>
    //       <motion.img
    //         key={currentIndex}
    //         src={images[currentIndex].src}
    //         className="carousel-image"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //       />
    //     </AnimatePresence>
    //     <button className="next-button" onClick={nextSlide}>
    //       Next
    //     </button>
    //   </div>
    // </>
  );
}

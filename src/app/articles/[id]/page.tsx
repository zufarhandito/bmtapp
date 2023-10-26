'use client';
import { NavigationBack } from '@/app/components/Templates';
import { ArticleCard } from '@/app/components/modules/Article';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <div className="px-10 lg:px-0 lg:max-w-5xl mx-auto">
      <NavigationBack title="Beranda" />
      <article>
        <Typography
          variant="h2"
          className="text-center lg:w-[700px] pt-12 pb-3 mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
        <div className="pb-12 flex gap-4 items-center justify-center">
          <Typography variant="small" className="text-center">
            Di posting oleh Admin
          </Typography>
          <div className="flex items-center gap-1 border-l border-gray-500 pl-4">
            <CalendarIcon className="w-4 h-4" />
            <Typography variant="small">12 Agustus 2023</Typography>
          </div>
        </div>
        <Image
          src={'https://picsum.photos/seed/picsum/1000/500'}
          width={1000}
          height={500}
          alt="article_image1"
          className="w-full"
        />
        <div className="relative mt-24">
          <div className="lg:absolute top-0 mb-7 left-12 flex flex-col lg:items-center gap-5">
            <div>
              <Typography
                variant="h3"
                className="font-bold border-t-4 border-indigo-600 pt-2"
              >
                12
              </Typography>
              <Typography className="text-xs">08 / 23</Typography>
            </div>
          </div>
          <div className="max-w-[690px] mx-auto">
            <Typography variant="h4" className="text-start pb-12 font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quia
              dolore, blanditiis consequatur laborum blanditiis consequatur
              laborum
            </Typography>
            <Typography variant="paragraph" className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit cumque voluptatum eum expedita ducimus, omnis illum
              unde reiciendis possimus amet quisquam aliquid dolorem deleniti
              adipisci saepe exercitationem qui debitis voluptatem! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Delectus fugiat culpa
              tempora repudiandae sapiente consequatur ducimus quae eum qui
              exercitationem iste suscipit, blanditiis aspernatur assumenda eos
              alias sequi deleniti distinctio. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quam corporis consequuntur voluptas,
              magnam sunt obcaecati minima? Dolorem veniam enim consectetur
              natus nemo corporis harum. Eum, perspiciatis. Id aspernatur quia
              fugit?
            </Typography>
            <Typography variant="paragraph" className="text-justify mt-7">
              Blanditiis aspernatur assumenda eos alias sequi deleniti
              distinctio. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quam corporis consequuntur voluptas, magnam sunt obcaecati
              minima? Dolorem veniam enim consectetur natus nemo corporis harum.
              Eum, perspiciatis. Id aspernatur quia fugit?
            </Typography>
            <Image
              alt="content_image"
              src={'https://picsum.photos/seed/picsum/600/250'}
              width={600}
              height={250}
              className="w-full my-16"
            />
            <Typography variant="paragraph" className="text-justify mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              sit dolores repudiandae iure quae? Distinctio recusandae libero
              quaerat quod delectus dolores repellat nihil, consequuntur magni
              sequi earum exercitationem. Laborum, quisquam.
            </Typography>
          </div>
        </div>
        <div className="border-t border-gray-400 pt-10">
          <Typography className="text-center text-xs pb-2">
            Read More
          </Typography>
          <Typography variant="h4" className="pb-12 text-center">
            Related Articles
          </Typography>
          <div className="md:flex gap-10 ">
            <ArticleCard type="col" />
            <ArticleCard type="col" />
            <ArticleCard type="col" />
          </div>
        </div>
      </article>
    </div>
  );
}

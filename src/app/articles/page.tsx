import React from 'react';
import { MyCarousel } from '../../components/Templates/Carousel/Carousel';
import {
  ArticleCard,
  ArticleCategorySection,
} from '../../components/modules/Article';
import { AdjustmentsVerticalIcon } from '@heroicons/react/24/outline';
import { SearchInput } from '../../components/Layouts';

type Props = {};

export default function page({}: Props) {
  return (
    <section className="min-h-screen lg:max-w-5xl mx-auto">
      <div className="h-[200px] mt-5">
        <MyCarousel />
      </div>
      <div className="flex mt-5">
        <div className="w-1/5">
          <ArticleCategorySection />
        </div>
        <div className="w-4/5">
          <div className="mb-5 mt-3 flex">
            <SearchInput label={'Cari disini...'} />
            <AdjustmentsVerticalIcon className="w-7 h-7" />
          </div>

          <div className="h-6">
            <ArticleCard type="row" />
            <ArticleCard type="row" />
            <ArticleCard type="row" />
            <ArticleCard type="row" />
            <ArticleCard type="row" />
          </div>
        </div>
      </div>
    </section>
  );
}

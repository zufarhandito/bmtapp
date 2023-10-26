import React from 'react';
import { MyCarousel } from '../components/Templates/Carousel/Carousel';
import {
  ArticleCard,
  ArticleCategorySection,
} from '../components/modules/Article';

type Props = {};

export default function page({}: Props) {
  return (
    <section className="min-h-screen lg:max-w-5xl mx-auto">
      <ArticleCategorySection />
      <MyCarousel />
      <ArticleCard type="row" />
    </section>
  );
}

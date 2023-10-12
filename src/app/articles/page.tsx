import React from 'react';
import ArticleCategorySection from '../components/Article/ArticlesHouse/ArticleCategorySection';
import ArticleCard from '../components/Article/ArticleCard';
import { MyCarousel } from '../components/Carousel';

type Props = {};

export default function page({}: Props) {
  return (
    <section className="min-h-screen lg:max-w-5xl mx-auto">
      <ArticleCategorySection />
      <MyCarousel />
      <ArticleCard />
    </section>
  );
}

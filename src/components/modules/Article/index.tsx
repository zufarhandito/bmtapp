import dynamic from 'next/dynamic';

export const ArticleCategorySection = dynamic(
  () => import('./Page/ArticleCategorySection'),
);
export const ArticleCard = dynamic(() => import('./ArticleCard'));

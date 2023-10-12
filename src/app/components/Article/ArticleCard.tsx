'use client';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import React from 'react';

type ArticleType = {
  title: string;
  image: string[];
  desc: string;
};

type Props = {
  articleData?: ArticleType;
};

export default function ArticleCard({ articleData }: Props) {
  const router = useRouter();
  return (
    <Card className="w-full max-w-[48rem] flex-row shadow-none lg:h-36">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-1/4 shrink-0 rounded-none"
      >
        <button onClick={() => router.push(`/articles/1`)}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </button>
      </CardHeader>
      <CardBody className="py-0">
        <a href="/articles/1">
          <Typography variant="small" color="gray" className="mb-1">
            startups
          </Typography>
        </a>
        <a href="/articles/1">
          <Typography variant="h5" color="blue-gray" className="mb-1">
            Lyft launching cross-platform service this week
          </Typography>
        </a>
        <a href="/articles/1">
          <Typography color="gray" variant="small" className="mb-8 font-normal">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            ........
          </Typography>
        </a>
      </CardBody>
    </Card>
  );
}

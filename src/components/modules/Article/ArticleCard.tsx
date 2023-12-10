'use client';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
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
  type: 'row' | 'col';
};

export default function ArticleCard({ articleData, type }: Props) {
  const router = useRouter();
  if (type === 'row') {
    return (
      <Card className="w-full max-w-[48rem] flex-row shadow-none lg:h-36">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-1/4 shrink-0 rounded-none "
        >
          <button onClick={() => router.push(`/articles/1`)} className="h-full">
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
            <Typography
              color="gray"
              variant="small"
              className="mb-8 font-normal"
            >
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              ........
            </Typography>
          </a>
        </CardBody>
      </Card>
    );
  } else if (type === 'col') {
    return (
      <Card className="max-w-[24rem] overflow-hidden ml-auto shadow-none rounded-none">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody className=" pl-0">
          <Typography variant="h5" color="blue-gray">
            UI/UX Review Check
          </Typography>
          <Typography
            variant="paragraph"
            color="gray"
            className="mt-3 font-normal"
          >
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between pl-0">
          <div className="flex items-center -space-x-3">
            <Tooltip content="Natali Craig">
              <Avatar
                size="sm"
                variant="circular"
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
            <Tooltip content="Tania Andrew">
              <Avatar
                size="sm"
                variant="circular"
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
          </div>
          <Typography className="font-normal">January 10</Typography>
        </CardFooter>
      </Card>
    );
  }
}

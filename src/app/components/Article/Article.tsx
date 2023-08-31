import React from 'react'
import ArticleCard from './ArticleCard';
import { ArticleCardBig } from './ArticleCardBig';
import { Button, Typography } from '@material-tailwind/react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

type Props = {}

type ArticleType = {
    title: string;
    image: string[];
    desc: string;
}

const articleData: ArticleType[] = [
    {
        title: "Esse consectetur dolor excepteur exercitation anim.",
        image: [
            "https://picsum.photos/seed/picsum/300/200",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300"
        ],
        desc: "Dolore aliqua nulla ea laboris labore anim nisi. Irure excepteur velit elit pariatur id voluptate anim cupidatat Lorem labore deserunt exercitation laboris. Sit est irure occaecat sit duis. Officia laboris dolore et non. Officia magna laboris aliquip aliquip duis ipsum Lorem excepteur do laboris voluptate sit mollit excepteur. Ex ullamco enim anim veniam velit Lorem cillum ullamco nostrud."
    },
    {
        title: "Velit cillum elit aliquip deserunt magna nostrud nulla nostrud.",
        image: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300"
        ],
        desc: "Voluptate minim incididunt veniam dolor non non pariatur tempor officia minim. Mollit aute id et est eiusmod aliqua ipsum aliquip voluptate enim cupidatat adipisicing. Ex minim amet nisi officia magna non in irure. Exercitation do duis ea aliquip cillum fugiat laborum sunt laborum anim ullamco qui. Ad non ea ad exercitation culpa est officia sint anim. Ad consectetur velit ullamco dolor dolor commodo quis minim reprehenderit duis."
    },
    {
        title: "In ut eiusmod nostrud et aute non dolore minim amet aute aute consequat.",
        image: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300"
        ],
        desc: "Aute deserunt minim laborum reprehenderit irure duis nostrud. Esse quis Lorem elit commodo adipisicing ad Lorem sit do incididunt adipisicing duis dolore officia. Voluptate excepteur est laborum aliquip do voluptate reprehenderit Lorem nulla est ex aliquip. In id in velit aute excepteur anim enim voluptate do excepteur deserunt esse veniam laborum. Anim enim et Lorem laborum anim non ullamco incididunt irure. Exercitation deserunt cillum enim deserunt non dolore Lorem. Sint culpa aute aliqua ad cillum incididunt."
    },
    {
        title: "In ut eiusmod nostrud et aute non dolore minim amet aute aute consequat.",
        image: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300"
        ],
        desc: "Aute deserunt minim laborum reprehenderit irure duis nostrud. Esse quis Lorem elit commodo adipisicing ad Lorem sit do incididunt adipisicing duis dolore officia. Voluptate excepteur est laborum aliquip do voluptate reprehenderit Lorem nulla est ex aliquip. In id in velit aute excepteur anim enim voluptate do excepteur deserunt esse veniam laborum. Anim enim et Lorem laborum anim non ullamco incididunt irure. Exercitation deserunt cillum enim deserunt non dolore Lorem. Sint culpa aute aliqua ad cillum incididunt."
    },
    {
        title: "In ut eiusmod nostrud et aute non dolore minim amet aute aute consequat.",
        image: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300"
        ],
        desc: "Aute deserunt minim laborum reprehenderit irure duis nostrud. Esse quis Lorem elit commodo adipisicing ad Lorem sit do incididunt adipisicing duis dolore officia. Voluptate excepteur est laborum aliquip do voluptate reprehenderit Lorem nulla est ex aliquip. In id in velit aute excepteur anim enim voluptate do excepteur deserunt esse veniam laborum. Anim enim et Lorem laborum anim non ullamco incididunt irure. Exercitation deserunt cillum enim deserunt non dolore Lorem. Sint culpa aute aliqua ad cillum incididunt."
    },
    {
        title: "In ut eiusmod nostrud et aute non dolore minim amet aute aute consequat.",
        image: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300"
        ],
        desc: "Aute deserunt minim laborum reprehenderit irure duis nostrud. Esse quis Lorem elit commodo adipisicing ad Lorem sit do incididunt adipisicing duis dolore officia. Voluptate excepteur est laborum aliquip do voluptate reprehenderit Lorem nulla est ex aliquip. In id in velit aute excepteur anim enim voluptate do excepteur deserunt esse veniam laborum. Anim enim et Lorem laborum anim non ullamco incididunt irure. Exercitation deserunt cillum enim deserunt non dolore Lorem. Sint culpa aute aliqua ad cillum incididunt."
    },
]

export default function Article({}: Props) {
  return (
    <article className='max-w-5xl my-32 mx-auto'>
        <Typography variant='h4' className='font-extrabold text-center'>
            Publikasi
        </Typography>
        <Typography className='mx-auto text-center mb-16 max-w-xl'>
            Lebih dekat dengan BMT Amanah dengan membaca artikel berita dan kegiatan yang dilakukan koperasi
        </Typography>
        <div className='flex flex-col lg:flex-row gap-10'>
            <div className='w-2/5'>
                <ArticleCardBig/>
            </div>
            <div className='w-3/5 flex flex-col justify-between'>
                <div className='flex justify-between'>
                    <Typography className='font-bold'>
                        Artikel Terbaru
                    </Typography>
                    <Button variant='text' className='flex py-0 items-center gap-2 text-indigo-900'>
                        Selengkapnya
                        <ArrowLongRightIcon className='h-5 w-5'/>
                    </Button>
                </div>
                {
                    articleData.slice(1,4).map((item,index)=>(
                        <ArticleCard articleData={articleData[index]}/>
                    ))
                }
            </div>
        </div>
    </article>
  )
}
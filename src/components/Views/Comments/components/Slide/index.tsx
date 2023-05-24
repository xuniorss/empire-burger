'use client'

import Slider from 'react-slick'

import { useTestimonials } from '@/hooks/useTestimonials'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Comment } from './components'
import './slide.scss'

const settings = {
   dots: true,
   arrows: false,
   infinite: false,
   speed: 500,
   slidesToShow: 3.5,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
         },
      },
      {
         breakpoint: 960,
         settings: {
            slidesToShow: 1.5,
         },
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
         },
      },
   ],
}

export const Slide = () => {
   const { data } = useTestimonials()

   return (
      <div className="px-3 py-4">
         {!data && (
            <span className="animate-pulse font-lilita text-3xl text-title/90">
               Buscando comentários...
            </span>
         )}

         {data && (
            <Slider {...settings} className="relative">
               {data.map((comment) => (
                  <Comment key={comment.name} comment={comment} />
               ))}
            </Slider>
         )}
      </div>
   )
}

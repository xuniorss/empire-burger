'use client'

import { TestimonialsProps } from '@/@types'
import useModal from '@/hooks/useModal'
import Image from 'next/image'
import { useCallback } from 'react'
import { RxDotFilled } from 'react-icons/rx'

export const Comment = ({ comment }: { comment: TestimonialsProps }) => {
   const modal = useModal()

   const handleMoreDetails = useCallback(
      (c: TestimonialsProps) => {
         modal.onOpen()

         const comments = localStorage.getItem(
            process.env.NEXT_PUBLIC_KEY_STORAGE as string
         )
         const commentsParsed: TestimonialsProps = JSON.parse(
            comments as string
         )

         if (!commentsParsed || c.testimonial === commentsParsed.testimonial)
            return localStorage.setItem(
               process.env.NEXT_PUBLIC_KEY_STORAGE as string,
               JSON.stringify(c)
            )

         localStorage.removeItem(process.env.NEXT_PUBLIC_KEY_STORAGE as string)
         localStorage.setItem(
            process.env.NEXT_PUBLIC_KEY_STORAGE as string,
            JSON.stringify(c)
         )
      },
      [modal]
   )

   return (
      <>
         <div
            onClick={() => handleMoreDetails(comment)}
            className="cursor-pointer rounded-[10px] bg-white shadow-lg"
         >
            <div className="p-2">
               <p className="line-clamp-4 font-lato text-base text-titleblack60">{`"${comment.testimonial}"`}</p>
               <div className="mt-3 flex flex-row gap-2">
                  <Image
                     src={comment.image}
                     alt={comment.name}
                     width={50}
                     height={50}
                     className="aspect-square h-[3.125rem] w-[3.125rem] rounded-full object-cover"
                  />
                  <div className="flex flex-col items-start justify-start">
                     <h3 className="truncate font-lilita text-lg uppercase text-title/90">
                        {comment.name}
                     </h3>
                     <div className="flex flex-row items-center font-lato text-[12px] leading-tight text-title/70">
                        <span className="truncate">{comment.age} anos</span>
                        <RxDotFilled />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

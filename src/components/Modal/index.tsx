'use client'

import { TestimonialsProps } from '@/@types'
import useModal from '@/hooks/useModal'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export const Modal = () => {
   const [comments, setComments] = useState<TestimonialsProps | null>(null)

   const modal = useModal()

   const handleClose = useCallback(() => {
      modal.onClose()
      localStorage.removeItem(process.env.NEXT_PUBLIC_KEY_STORAGE as string)
      setComments(null)
   }, [modal])

   useEffect(() => {
      if (!modal.isOpen) {
         setComments(null)
         return
      }

      const comment = localStorage.getItem(
         process.env.NEXT_PUBLIC_KEY_STORAGE as string
      )
      setComments(JSON.parse(comment as string))
   }, [modal.isOpen])

   if (!modal.isOpen) return null

   return (
      <>
         <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800 bg-opacity-70 outline-none focus:outline-none">
            <div className="relative mx-auto my-6 h-full w-full lg:h-auto lg:w-3/6 lg:max-w-3xl">
               {/* Content */}
               <div className="relative flex h-full w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none lg:h-auto">
                  {/* Header */}
                  <div className="flex items-center justify-between rounded-t p-5">
                     <h3 className="font-lilita text-4xl uppercase text-title/90">
                        {comments?.name}
                     </h3>
                     <button
                        onClick={handleClose}
                        className="ml-auto border-0 p-1 text-black transition hover:opacity-70"
                     >
                        <AiOutlineClose size={20} />
                     </button>
                  </div>
                  {/* Body */}
                  {comments && (
                     <div className="relative flex-auto p-5">
                        <div className="flex flex-col gap-5 lg:flex-row lg:gap-7">
                           <div className="flex flex-col items-center gap-1">
                              <Image
                                 src={comments.image}
                                 alt={comments.name}
                                 width={100}
                                 height={100}
                                 className="aspect-square h-28 w-28 rounded-full object-cover"
                              />

                              <p className="font-lato text-lg text-titleblack60">
                                 {comments.age} anos
                              </p>
                           </div>
                           <div className="w-full max-w-lg">
                              <p className="font-lato text-xl font-bold text-title/80">
                                 {comments.testimonial}
                              </p>
                           </div>
                        </div>
                     </div>
                  )}
                  {/* Footer */}
                  {/* <div className="flex flex-col gap-2 p-10">footer</div> */}
               </div>
            </div>
         </div>
      </>
   )
}

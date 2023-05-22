'use client'

import useToggle from '@/hooks/useToggle'
import { useCallback } from 'react'
import { CgClose } from 'react-icons/cg'
import { Hamburger } from '../Hamburger'

export const Toggle = () => {
   const toggle = useToggle()

   const toggled = useCallback(() => {
      if (!toggle.isOpen) return toggle.onOpen()
      toggle.onClose()
   }, [toggle])

   return (
      <div
         onClick={toggled}
         className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center rounded bg-[#1d060526] lg:hidden"
      >
         {!toggle.isOpen && <Hamburger />}
         {toggle.isOpen && <CgClose size={25} />}
      </div>
   )
}

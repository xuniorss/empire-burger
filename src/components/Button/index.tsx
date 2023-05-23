'use client'

import { IconType } from 'react-icons'

interface ButtonProps {
   header?: boolean
   label: string
   icon?: IconType
}

export const Button = ({ header = false, label, icon: Icon }: ButtonProps) => {
   return (
      <button
         className={`my-1 px-4 ${
            header ? 'bg-btnyellow' : 'bg-btnred'
         } rounded-[4px] ${
            header ? 'text-titleblack87' : 'text-white'
         } font-lato ${header ? 'text-base' : 'text-2xl'} ${
            header ? 'h-9' : 'h-14'
         } font-[700] ${
            header ? 'hover:bg-btnyellow/80' : 'hover:bg-btnred/80'
         } transition-all duration-300 ease-out`}
      >
         <span className="flex flex-row items-center gap-2">
            <>
               {Icon && <Icon size={20} />}
               {label}
            </>
         </span>
      </button>
   )
}

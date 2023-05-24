'use client'

import useToggle from '@/hooks/useToggle'
import { Links } from '../Links'

export const Sidebar = () => {
   const toggle = useToggle()

   return (
      <>
         {toggle.isOpen && (
            <div className="fixed z-10 flex h-full w-screen flex-col bg-amber-200/80">
               <div className="relative mt-20 flex flex-col">
                  <nav className="flex flex-col">
                     <Links isSidebar />
                  </nav>
               </div>
            </div>
         )}
      </>
   )
}

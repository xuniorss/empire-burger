'use client'

import { useMenu } from '@/hooks/useMenu'
import { ListItem } from '../ListItem'

export const ItemsMenu = () => {
   const { data } = useMenu()

   return (
      <div className="mx-6 my-[3.406rem] lg:mx-8 lg:my-[4.491rem]">
         <h1 className="font-lilita text-[1.563rem] uppercase leading-9 text-btnyellow md:text-[2rem] md:leading-[3.375rem]">
            Cardápio imperial | Burger
         </h1>
         <div className="mt-4 flex flex-col gap-8">
            {!data && (
               <span className="animate-pulse font-lilita text-3xl text-white">
                  Buscando cardápio...
               </span>
            )}
            {data &&
               data.map((item) => <ListItem key={item.plate} data={item} />)}
         </div>
      </div>
   )
}

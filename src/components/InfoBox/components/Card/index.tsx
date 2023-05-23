import { ReactElement } from 'react'

interface CardProps {
   element: ReactElement
   title: string
   description?: string
   lastChield?: boolean
}

export const Card = ({
   element,
   title,
   description,
   lastChield = false,
}: CardProps) => {
   return (
      <>
         <main className="flex flex-row items-center gap-4 md:gap-[18px]">
            <div className="flex h-[3.75rem] w-[3.75rem] flex-col items-center justify-center rounded-full bg-[#FAE2CB]">
               {element}
            </div>
            <div className="w-full max-w-[170px]">
               <span className="font-lilita text-xl uppercase text-[#1D0605E5]">
                  {title}
               </span>
               <p className="font-lato text-base text-title/70">
                  {description}
               </p>
            </div>
         </main>
         {!lastChield && (
            <hr className="h-0 w-full border border-[#492E1526] md:h-20 md:w-0" />
         )}
      </>
   )
}

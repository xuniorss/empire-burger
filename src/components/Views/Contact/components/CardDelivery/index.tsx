import { ReactElement } from 'react'

interface CardDeliveryProps {
   isBig?: boolean
   title: string
   description: string
   icon: ReactElement
}

export const CardDelivery = ({
   isBig = false,
   title,
   description,
   icon,
}: CardDeliveryProps) => {
   return (
      <div className="flex min-h-[90px] w-full flex-col justify-center rounded-[10px] bg-white hover:shadow-xl hover:transition">
         <div className="mx-[1.434rem] flex flex-row items-center">
            <div className="flex h-[3.75rem] w-[3.75rem] select-none flex-col items-center justify-center rounded-full bg-[#FAE2CB]">
               {icon}
            </div>
            <div className="ml-[1.125rem] mr-[1.502rem] h-[2.831rem] border border-title/40" />
            <div className="h-full w-auto">
               <h3 className="font-lilita text-xl uppercase text-title/90">
                  {title}
               </h3>
               <p className="text-base text-title/70">{description}</p>
            </div>
         </div>
      </div>
   )
}

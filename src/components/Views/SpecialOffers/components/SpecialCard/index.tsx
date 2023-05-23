interface SpecialCardsProps {
   title: string
   subt: string
   secondaryTitle?: string
   secondarySubt?: string
   changeColor?: boolean
}

export const SpecialCards = ({
   title,
   subt,
   secondaryTitle,
   secondarySubt,
   changeColor = false,
}: SpecialCardsProps) => {
   return (
      <>
         <div className="flex h-full w-full flex-col justify-between px-5">
            <div className="flex flex-col">
               <h1
                  className={`font-lilita text-[1.563rem] uppercase leading-relaxed ${
                     changeColor ? 'text-title/90' : 'text-white/90'
                  }`}
               >
                  {title}
               </h1>
               <p
                  className={`font-lato text-lg ${
                     changeColor ? 'text-title/70' : 'text-white/70'
                  }`}
               >
                  {subt}
               </p>
            </div>
            {secondaryTitle && secondarySubt && (
               <div className="flex flex-col items-end">
                  <p className="font-lato text-2xl text-white/70">
                     {secondaryTitle}
                  </p>
                  <h1 className="font-lilita text-[2.625rem] uppercase leading-relaxed text-white/90">
                     {secondarySubt}
                  </h1>
               </div>
            )}
         </div>
      </>
   )
}

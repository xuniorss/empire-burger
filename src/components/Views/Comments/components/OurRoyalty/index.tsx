import { Slide } from '../Slide'

export const OurRoyalty = () => {
   return (
      <div className="flex flex-col gap-4">
         <div className="flex flex-col gap-1">
            <h2 className="font-lilita text-[2rem] uppercase leading-[3rem] text-title/90">
               Nossa realeza
            </h2>
            <p className="font-lato text-base text-title/70">
               A satisfação de nossos clientes em primeiro lugar!
            </p>
         </div>
         <div>
            <Slide />
         </div>
      </div>
   )
}

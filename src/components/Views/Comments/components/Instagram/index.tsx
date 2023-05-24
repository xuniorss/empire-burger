import { BsDot } from 'react-icons/bs'

export const Instagram = () => {
   return (
      <div className="mt-16 flex h-full w-full flex-col items-center lg:mt-32">
         <div className="flex flex-col items-center gap-1 px-4 md:px-0">
            <h1 className="font-lilita text-[2rem] uppercase leading-[3rem] text-title/90">
               Publicações do instagram
            </h1>
            <p className="text-center font-lato text-base text-title/70">
               Todos os nossos clientes são tratados como rei e rainha, com a
               nossa colunaria artesanal.
            </p>
         </div>
         <div className="relative mt-4 min-h-[13.625rem] w-full">
            <div className="absolute inset-0 bg-[url(../assets/instagram-publi.png)] bg-cover bg-center bg-no-repeat" />
            <div className="absolute inset-0 before:absolute before:inset-x-0 before:inset-y-0 before:bg-black before:opacity-25 after:absolute after:inset-x-0 after:inset-y-0 after:bg-black after:opacity-25" />
         </div>
         <div className="flex h-[50px] max-w-full flex-row items-center justify-center overflow-x-hidden bg-btnyellow">
            {Array.from({ length: 15 }).map((_, i) => (
               <div key={i} className="flex animate-marquee">
                  <h3 className="inline-flex items-center whitespace-nowrap font-lilita text-[1.75rem] uppercase leading-[2.625rem] text-title/90 transition-all duration-200 ease-in">
                     #empireburger
                     <BsDot />
                  </h3>
               </div>
            ))}
         </div>
      </div>
   )
}

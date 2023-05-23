import { Timer } from '@/components/Timer'
import { getOpeningHours } from '@/functions/getOpeningHours'

export const OpeningHours = () => {
   const status = getOpeningHours()

   return (
      <div
         className={`relative flex h-full flex-row gap-4 rounded-[10px] ${
            status === 'Aberto' ? 'bg-green-800' : 'bg-btnred'
         } px-6 py-[1.125rem] lg:w-[35.625rem]`}
      >
         <div className="flex h-[95px] w-[95px] flex-col items-center justify-center rounded-full bg-title/20">
            <Timer />
         </div>
         <div className="border border-title/40" />
         <div className="flex flex-col">
            <h2 className="font-lilita text-lg uppercase leading-7 text-title/70 md:text-[1.563rem]">
               Horário de funcionamento
            </h2>

            <h3 className="font-lato text-sm font-[700] text-white/90 md:text-base">
               Segunda-feira a sexta-feira: 17h00 - 23h00
            </h3>
            <h3 className="font-lato text-sm font-[700] text-white/90 md:text-base">
               Sabado a Domíngo: 18h30 - 23h00
            </h3>
         </div>

         <div className="absolute bottom-0 right-0 hidden md:block">
            <div className="rounded-ss-md bg-white/50 p-3">
               <h1 className="font-lilita text-lg text-title">{`${status} agora`}</h1>
            </div>
         </div>
      </div>
   )
}

import { Button } from '@/components/Button'
import { InfoBox } from '@/components/InfoBox'

export const HomeView = () => {
   return (
      <section id="home" className="h-auto">
         <main className="relative h-[53.466rem] w-full overflow-hidden bg-[url(../assets/banner-mob.jpg)] bg-cover bg-center bg-no-repeat sm:h-full sm:max-h-[34.063rem] sm:min-h-[34.063rem] sm:bg-[url(../assets/banner-hero.png)]">
            <div className="mt-20 flex flex-col items-center">
               <div className="flex h-full w-full max-w-6xl flex-col items-start justify-center space-y-3 px-4 md:h-[25rem]">
                  <span className="font-lato text-xl font-[700] leading-relaxed text-title/90 md:text-2xl">
                     Uma nova experiência!
                  </span>
                  <h1 className="font-lilita text-5xl uppercase text-[#3B200B] md:text-7xl">
                     King <span className="text-btnyellow">Burger</span>
                  </h1>
                  <span className="font-lato text-xl text-title/70 md:text-2xl">
                     Para quem tem um{' '}
                     <span className="rounded-md bg-btnyellow p-1 font-[900]">
                        Apetite de um REI!
                     </span>
                  </span>

                  <Button label="Comprar Agora" />
               </div>
            </div>
         </main>
         <InfoBox />
      </section>
   )
}

import { Container } from '@/components/Container'
import { OpeningHours } from './components/OpeningHours'
import { SpecialCards } from './components/SpecialCard'

export const SpecialOffers = () => {
   return (
      <section id="promotion" className="h-auto">
         <div className="mt-32 flex w-full flex-col items-center">
            <Container>
               <div className="mt-16 flex flex-col lg:mt-0">
                  <div>
                     <h1 className="font-lilita text-[32px] uppercase leading-[2.2rem]">
                        Ofertas especiais
                     </h1>
                     <p className="font-lato text-base text-title/70">
                        Aproveite todas as nossas ofertas, fiquem de olhos
                        abertos, porque sempre estamos mudando o nosso cardapio.
                     </p>
                  </div>

                  <div className="mt-4 flex h-screen flex-col items-center gap-7 xl:grid xl:h-[26.875rem] xl:grid-cols-special-2-column xl:place-items-center">
                     <div className="flex h-full w-full flex-col rounded-[10px] bg-[url('../assets/oferta-1.png')] bg-cover bg-center">
                        <SpecialCards
                           title="Burger imperial+batata"
                           subt="250kg"
                           secondaryTitle="Apenas"
                           secondarySubt="Hoje"
                        />
                     </div>
                     <div className="flex h-full w-full flex-col gap-7">
                        <div className="flex h-full w-full flex-col rounded-[10px] bg-[url('../assets/oferta-2.png')] bg-cover bg-center bg-no-repeat">
                           <SpecialCards
                              title="Batata"
                              subt="150kg"
                              changeColor
                           />
                        </div>
                        <div className="flex h-full w-full flex-col rounded-[10px] bg-[url('../assets/oferta-3.png')] bg-cover bg-center">
                           <SpecialCards
                              title="Sorvete"
                              subt="50kg"
                              changeColor
                           />
                        </div>
                     </div>
                  </div>

                  <div className="mt-16 flex flex-col items-center gap-[30px] lg:flex-row">
                     <OpeningHours />
                     <div>
                        <p className="font-lato text-lg font-normal text-title/70">
                           Não esqueça de marcar a gente no Instagram:
                        </p>
                        <h1 className="font-lilita text-[1.75rem] uppercase leading-10 text-btnred">
                           #empireburger
                        </h1>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
      </section>
   )
}

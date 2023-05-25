import { Container } from '@/components/Container'
import Image from 'next/image'

import cardPhone from '@/assets/card-phone.png'

import { Deliveryman } from '@/components/Deliveryman'
import { IceCream } from '@/components/IceCream'
import { Ifood } from '@/components/Ifood'
import { Whatsapp } from '@/components/Whatsapp'
import { CardDelivery } from './components/CardDelivery'
import { Map } from './components/Map'
import { MakeYourWishCard } from './components/MakeYourWishCard'

export const Contact = () => {
   return (
      <section id="contact" className="h-auto">
         <div className="mt-[4.261rem] flex flex-col items-center">
            <Container>
               <div className="flex flex-col gap-[2.472rem] lg:grid lg:grid-cols-2 lg:gap-[1.816rem]">
                  <div>
                     <Image
                        src={cardPhone}
                        alt="card-phone"
                        width={600}
                        height={400}
                        className="aspect-auto h-full w-full"
                     />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                     <div>
                        <h1 className="mb-4 font-lilita text-[2rem] uppercase leading-[3rem] text-title/90">
                           Nossas entregas
                        </h1>
                        <div className="flex flex-col gap-2">
                           <CardDelivery
                              icon={<Whatsapp />}
                              title="Whatsapp"
                              description="Vamos direto ao ponto, sem perder tempo!"
                           />

                           <CardDelivery
                              icon={<Deliveryman />}
                              title="Entrega"
                              description="Entregamos menos de 45 minutos na porta da sua casa!"
                           />

                           <CardDelivery
                              icon={<IceCream />}
                              title="Sobremesa"
                              description="Pedidos assima de 100 reais, ganham brindes."
                           />

                           <CardDelivery
                              icon={<Ifood color="#60340B" />}
                              title="iFood"
                              description="Nossa loja é Top 1 da região!"
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <MakeYourWishCard />
            </Container>
            <div className="mt-16 flex w-full flex-col items-center gap-8">
               <Map />
            </div>
         </div>
      </section>
   )
}

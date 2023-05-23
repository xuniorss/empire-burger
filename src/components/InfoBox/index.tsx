import { Burger } from '../Burger'
import { Deliveryman } from '../Deliveryman'
import { Headphones } from '../Headphones'
import { Card } from './components/Card'

export const InfoBox = () => {
   return (
      <div className="relative">
         <div className="absolute top-1/2 flex w-full -translate-y-1/2 flex-col items-center">
            <div className="flex w-full max-w-6xl flex-col items-center px-5">
               <div className="flex min-h-[120px] w-full max-w-[970px] flex-col items-center justify-between gap-4 rounded-[10px] bg-white px-5 py-6 shadow-lg md:flex-row md:py-0">
                  <Card
                     element={<Burger />}
                     title="Artesanal"
                     description="Nossas receitas são feitas com todo cuidado"
                  />

                  <Card
                     element={<Headphones />}
                     title="Atendimento"
                     description="Totalmente personalizado"
                  />

                  <Card
                     element={<Deliveryman />}
                     title="DELIVERY Speed"
                     description="Entregamos menos de 45 minutos"
                     lastChield
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

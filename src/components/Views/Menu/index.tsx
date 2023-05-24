import { Button } from '@/components/Button'
import { ItemsMenu } from './components/ItemsMenu'

export const Menu = () => {
   return (
      <section id="menu" className="h-auto">
         <div className="mt-16 flex flex-col items-center">
            <div className="flex w-full flex-col lg:grid lg:grid-cols-2">
               <div className="flex h-full w-full flex-col items-end bg-[url('../assets/banner-menu-mobile.png')] bg-cover bg-no-repeat md:min-h-[576px] md:bg-[url('../assets/banner-menu.png')]">
                  <div className="flex h-full w-full flex-col justify-center pl-4 md:max-w-xl">
                     <div className="mx-6 my-10 w-[28.75rem] md:mx-0 md:my-0">
                        <h1 className="font-lilita text-4xl uppercase leading-tight text-[#3B200B] md:text-[2.589rem]">
                           Escolha o seu combo imperial,{' '}
                           <span className="rounded-lg bg-btnyellow">
                              peça agora!
                           </span>
                        </h1>
                        <p className="mt-3 font-lato text-base text-title/70">
                           Temos vários tipos de pratos para a nossa realeza,
                           fique esperto porque temos sempre promoção!
                        </p>

                        <div className="mt-4">
                           <Button label="Ver Cardápio Completo" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col items-center bg-[#3B200B] lg:items-start">
                  <ItemsMenu />
               </div>
            </div>
         </div>
      </section>
   )
}

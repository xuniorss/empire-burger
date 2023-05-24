import { Container } from '@/components/Container'
import { Instagram } from './components/Instagram'
import { OurRoyalty } from './components/OurRoyalty'
import { PersonalizedService } from './components/PersonalizedService'

export const Comments = () => {
   return (
      <section id="comments" className="h-auto">
         <main className="mt-[4.499rem] flex flex-col items-center">
            <Container>
               <div className="flex flex-col">
                  <PersonalizedService />
                  <hr className="my-16 flex-grow border border-title/20 lg:my-32" />
                  <OurRoyalty />
               </div>
            </Container>
            <Instagram />
         </main>
      </section>
   )
}

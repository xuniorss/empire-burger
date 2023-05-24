import { Comments } from '@/components/Views/Comments'
import { Contact } from '@/components/Views/Contact'
import { Menu } from '@/components/Views/Menu'
import { SpecialOffers } from '@/components/Views/SpecialOffers'
import { HomeView } from '../components/Views/Home'

export default function Home() {
   return (
      <>
         <HomeView />
         <SpecialOffers />
         <Menu />
         <Comments />
         <Contact />
      </>
   )
}

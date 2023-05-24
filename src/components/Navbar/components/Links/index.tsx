import { Link } from 'react-scroll/modules'

type NavLinksProps = {
   name: string
   to: string
}

const NavLinks: Array<NavLinksProps> = [
   { name: 'Home', to: 'home' },
   { name: 'Promoção', to: 'promotion' },
   { name: 'Cardápio', to: 'menu' },
   { name: 'Comentário', to: 'comments' },
   { name: 'Contato', to: 'contact' },
]

interface LinksProps {
   isSidebar?: boolean
}

export const Links = ({ isSidebar = false }: LinksProps) => {
   return (
      <ul
         className={`flex ${
            isSidebar ? 'flex-col' : 'flex-row'
         } items-center gap-4`}
      >
         {NavLinks.map((link) => (
            <li
               key={link.to}
               className="cursor-pointer font-lato text-lg text-titleblack60 transition-all duration-300 ease-in-out hover:text-titleblack87"
            >
               <Link
                  activeStyle={{ color: '#34201F', fontWeight: 'bold' }}
                  to={link.to}
                  spy
                  smooth
                  offset={0}
                  duration={500}
               >
                  {link.name}
               </Link>
            </li>
         ))}
      </ul>
   )
}

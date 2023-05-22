'use client'

import { usePathname } from 'next/navigation'

type NavLinksProps = {
   name: string
   href: string
   actived: boolean
}

const NavLinks: Array<NavLinksProps> = [
   { name: 'Home', href: '#home', actived: true },
   { name: 'Promoção', href: '#promotion', actived: false },
   { name: 'Cardápio', href: '#menu', actived: false },
   { name: 'Comentário', href: '#comments', actived: false },
   { name: 'Contato', href: '#contact', actived: false },
]

interface LinksProps {
   isSidebar?: boolean
}

export const Links = ({ isSidebar = false }: LinksProps) => {
   const route = usePathname()

   return (
      <ul
         className={`flex ${
            isSidebar ? 'flex-col' : 'flex-row'
         } items-center gap-4`}
      >
         {NavLinks.map((link) => (
            <li
               key={link.href}
               className="cursor-pointer font-lato text-lg text-titleblack60 transition-all duration-300 ease-in-out hover:text-titleblack87"
            >
               <a href={link.href}>{link.name}</a>
            </li>
         ))}
      </ul>
   )
}

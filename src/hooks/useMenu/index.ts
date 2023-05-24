import { MenuProps } from '@/@types'
import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

export const useMenu = () => {
   const { data } = useSWR<MenuProps[]>('/api/menu', fetcher)
   return { data }
}

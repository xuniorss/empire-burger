import { TestimonialsProps } from '@/@types'
import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

export const useTestimonials = () => {
   const { data } = useSWR<TestimonialsProps[]>('/api/testimonials', fetcher)
   return { data }
}

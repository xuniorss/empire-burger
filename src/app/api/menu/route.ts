import { MenuProps } from '@/@types'
import { api } from '@/libs/api'
import { NextResponse } from 'next/server'

export const GET = async (req: Request, res: Response) => {
   try {
      const { data } = await api.get<MenuProps[]>('/menu')

      return NextResponse.json(data)
   } catch (error) {
      return new Response('Failed', { status: 400 })
   }
}

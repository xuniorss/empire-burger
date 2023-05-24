import { MenuProps } from '@/@types'
import axios from 'axios'
import { NextResponse } from 'next/server'

export const GET = async (req: Request, res: Response) => {
   try {
      const url = 'https://api.brchallenges.com/api/empire-burger/menu'

      const { data } = await axios.get<MenuProps[]>(url)

      return NextResponse.json(data)
   } catch (error) {
      return new Response('Failed', { status: 400 })
   }
}

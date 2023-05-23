import { getDay, isAfter, isBefore, setHours, setMinutes } from 'date-fns'

export const getOpeningHours = () => {
   const now = new Date()
   const dayOfWeek = getDay(now)
   const openingTime = setHours(
      setMinutes(now, 0),
      dayOfWeek >= 1 && dayOfWeek <= 5 ? 17 : 18.5
   )
   const closetingTime = setHours(setMinutes(now, 0), 23)

   return isAfter(now, openingTime) && isBefore(now, closetingTime)
      ? 'Aberto'
      : 'Fechado'
}

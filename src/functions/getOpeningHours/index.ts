import { getDay, isAfter, isBefore, setHours, setMinutes } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'

export const getOpeningHours = () => {
   const timeZone = 'America/Sao_Paulo'
   const now = utcToZonedTime(new Date(), timeZone)
   const dayOfWeek = getDay(now)
   const openingTime = setHours(
      setMinutes(now, 0),
      dayOfWeek >= 1 && dayOfWeek <= 5 ? 17 : 18.5
   )
   const closingTime = setHours(setMinutes(now, 0), 23)

   // const formattedOpeningTime = format(openingTime, 'HH:mm', { timeZone })
   // const formattedClosingTime = format(closingTime, 'HH:mm', { timeZone })

   return isAfter(now, openingTime) && isBefore(now, closingTime)
      ? 'Aberto'
      : 'Fechado'
}

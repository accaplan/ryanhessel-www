import { isValid, parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  if (!isValid(parseISO(dateString))) {
    return <div>No date</div>
  }
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

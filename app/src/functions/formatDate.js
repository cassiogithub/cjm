export function formatDate(date) {
  const INITIAL_SLICE = 0
  const END_SLICE = 5
  const _date = new Date(date).toLocaleDateString()
  const time = new Date(date).toLocaleTimeString().slice(INITIAL_SLICE, END_SLICE)
  return `${_date} às ${time}`
}

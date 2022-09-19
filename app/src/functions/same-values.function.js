export function checkSameValues(value, value2, message) {
  if (value !== value2) {
    throw new Error(message)
  }
}

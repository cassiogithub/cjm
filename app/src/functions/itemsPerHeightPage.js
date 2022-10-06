export function itemsPerHeight() {
  const innerHeight = window.innerHeight
  if (innerHeight >= 900) {
    return 6
  } else if (innerHeight >= 600) {
    return 4
  } else if (innerHeight > 400) {
    return 3
  } else {
    return 3
  }
}

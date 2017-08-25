export const hexToRgb = (hex, alpha) => {
  let r
  let g
  let b

  if (hex.length == 7) {
    r = getIntFromHex(hex.slice(1, 3))
    g = getIntFromHex(hex.slice(3, 5))
    b = getIntFromHex(hex.slice(5, 7))
  } else if (hex.length == 4) {
    r = getIntFromHex(
      `${hex.slice(1, 2)}${hex.slice(1, 2)}`
    )
    g = getIntFromHex(
      `${hex.slice(2, 3)}${hex.slice(2, 3)}`
    )
    b = getIntFromHex(
      `${hex.slice(3, 4)}${hex.slice(3, 4)}`
    )
  } else {
    console.error(`Incorrect number of characters in hex string ${hex}`)
  }

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

const getIntFromHex = (hex) => {
  if (hex.length == 2) {
    return parseInt(hex, 16)
  } else {
    console.error('Cannot parse hex string ${hex}')
  }
}

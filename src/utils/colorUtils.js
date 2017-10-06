export const hexToRgb = (hex, alpha) => {
  const [r, g, b] = rgbFromHexString(hex)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

export const rgbFromHexString = (hex) => {
  let r, g, b

  if (hex[0] == '#') {
    hex = hex.slice(1)
  }

  if (hex.length == 6) {
    r = getIntFromHex(hex.slice(0, 2))
    g = getIntFromHex(hex.slice(2, 4))
    b = getIntFromHex(hex.slice(4, 6))
  } else if (hex.length == 3) {
    r = getIntFromHex(
      `${hex[0]}${hex[0]}`
    )
    g = getIntFromHex(
      `${hex[1]}${hex[1]}`
    )
    b = getIntFromHex(
      `${hex[2]}${hex[2]}`
    )
  } else {
    throw Error(`Hex string in format "#FFFFFF" or "#FFF" expected but was ${hex}`)
  }

  return [r, g, b]
}

const getIntFromHex = (hex) => {
  if (hex.length == 2) {
    return parseInt(hex, 16)
  } else {
    throw Error(`Hex string "${hex}" is not valid`)
  }
}

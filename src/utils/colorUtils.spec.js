import {
  hexToRgb,
  lighten,
  rgbFromHexString
} from './colorUtils'

describe('hexStringToRgb', () => {
  test('converts 6-letter hex to rgb string', () => {
    const hex = '#ff6347'
    const result = hexToRgb(hex)
    const expected = "rgb(255, 99, 71)"

    expect(result).toEqual(expected)
  })

  test('converts 3-letter hex to rgb string', () => {
    const hex = '#FFF'
    const result = hexToRgb(hex)
    const expected = "rgb(255, 255, 255)"

    expect(result).toEqual(expected)
  })

  test('converts 6-letter hex with alpha to rgba string', () => {
    const hex = '#ff6347'
    const alpha = '0.5'
    const result = hexToRgb(hex, alpha)
    const expected = "rgba(255, 99, 71, 0.5)"

    expect(result).toEqual(expected)
  })

  test('converts 3-letter hex with alpha to rgba string', () => {
    const hex = '#FFF'
    const alpha = '0.5'
    const result = hexToRgb(hex, alpha)
    const expected = "rgba(255, 255, 255, 0.5)"

    expect(result).toEqual(expected)
  })
})

describe('rgbFromHexString', () => {
  test('converts 6-letter hex to rgb', () => {
    const hex = "FFFFFF"
    const result = rgbFromHexString(hex)
    const expected = [255, 255, 255]

    expect(result).toEqual(expected)
  })

  test('converts 3-letter hex to rgb', () => {
    const hex = 'FFF'
    const result = rgbFromHexString(hex)
    const expected = [255, 255, 255]

    expect(result).toEqual(expected)
  })

  test('converts 6-letter hex with # to rgb', () => {
    const hex = "#FFFFFF"
    const result = rgbFromHexString(hex)
    const expected = [255, 255, 255]

    expect(result).toEqual(expected)
  })

  test('converts 3-letter hex with # to rgb', () => {
    const hex = '#FFF'
    const result = rgbFromHexString(hex)
    const expected = [255, 255, 255]

    expect(result).toEqual(expected)
  })

  test('throws InvalidArgumentError if invalid argument', () => {
    const invalid = '!#$#$AWFEWF'

    expect(() => {
      rgbFromHexString(invalid)
    }).toThrow()
  })
})

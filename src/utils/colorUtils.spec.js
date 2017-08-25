import { hexToRgb } from './colorUtils'

describe('hexToRgb', () => {
  test('converts 6-letter hex to rgb', () => {
    const hex = "#FFFFFF"
    const result = hexToRgb(hex)
    const expected = "rgb(255, 255, 255)"

    expect(result).toEqual(expected)
  })

  test('converts 3-letter hex to rgb', () => {
    const hex = '#FFF'
    const result = hexToRgb(hex)
    const expected = "rgb(255, 255, 255)"

    expect(result).toEqual(expected)
  })

  test('converts 6-letter hex with alpha to rgba', () => {
    const hex = '#FFFFFF'
    const alpha = '0.5'
    const result = hexToRgb(hex, alpha)
    const expected = "rgba(255, 255, 255, 0.5)"

    expect(result).toEqual(expected)
  })

  test('converts 3-letter hex with alpha to rgba', () => {
    const hex = '#FFF'
    const alpha = '0.5'
    const result = hexToRgb(hex, alpha)
    const expected = "rgba(255, 255, 255, 0.5)"

    expect(result).toEqual(expected)
  })
})

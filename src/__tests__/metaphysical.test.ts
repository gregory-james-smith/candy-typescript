import { isNothingness } from '../metaphysical'

describe('nothingness', () => {
  test('undefined', () => {
    // Setup
    const input = undefined
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeTruthy();
  })
})

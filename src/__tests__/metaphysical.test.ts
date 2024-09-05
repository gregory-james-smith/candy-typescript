import { isEmptiness, isNothingness, isSubstantive } from '../metaphysical'

describe('nothingness', () => {
  test('undefined', () => {
    // Setup
    const input = undefined
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('null', () => {
    // Setup
    const input = undefined
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('NaN', () => {
    // Setup
    const input = NaN
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('False', () => {
    // Setup
    const input = false
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Zero', () => {
    // Setup
    const input = 0
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Big zero', () => {
    // Setup
    const input = 0n
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty string literal', () => {
    // Setup
    const input = ""
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty array literal', () => {
    // Setup
    const input: string[] = []
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })  
  test('Empty object literal', () => {
    // Setup
    const input = {}
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty string constuctor', () => {
    // Setup
    const input = new String("");
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty array constructor', () => {
    // Setup
    const input: string[] = new Array();
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })  
  test('Empty object constructor', () => {
    // Setup
    const input = new Object();
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty map', () => {
    // Setup
    const input = new Map();
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty set', () => {
    // Setup
    const input = new Set()
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('True', () => {
    // Setup
    const input = true
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('One', () => {
    // Setup
    const input = 1
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Big one', () => {
    // Setup
    const input = 1n
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('String literal', () => {
    // Setup
    const input = "a"
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Array literal', () => {
    // Setup
    const input: string[] = ["a"]
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })  
  test('Object literal', () => {
    // Setup
    const input = {a: 1}
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('String constuctor', () => {
    // Setup
    const input = new String("a");
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Array constructor', () => {
    // Setup
    const input: string[] = new Array("a");
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })  
  test('Object constructor', () => {
    // Setup
    const input = new Object({a: 1});
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Class', () => {
    // Setup
    class Input {}
    // Test
    const result = isNothingness(Input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Map', () => {
    // Setup
    const input = new Map([["a", 1]]);
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Set', () => {
    // Setup
    const input = new Set("a")
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Symbol', () => {
    // Setup
    const input = Symbol()
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Arrow function', () => {
    // Setup
    const input = () => {};
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Function', () => {
    // Setup
    function input() {
      return;
    };
    // Test
    const result = isNothingness(input)
    // Assert
    expect(result).toBeFalsy();
  })
})

describe('emptiness', () => {
  test('undefined', () => {
    // Setup
    const input = undefined
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('null', () => {
    // Setup
    const input = undefined
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('NaN', () => {
    // Setup
    const input = NaN
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('False', () => {
    // Setup
    const input = false
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Zero', () => {
    // Setup
    const input = 0
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Big zero', () => {
    // Setup
    const input = 0n
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Empty string literal', () => {
    // Setup
    const input = ""
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Empty array literal', () => {
    // Setup
    const input: string[] = []
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeTruthy();
  })  
  test('Empty object literal', () => {
    // Setup
    const input = {}
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Empty string constuctor', () => {
    // Setup
    const input = new String("");
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Empty array constructor', () => {
    // Setup
    const input: string[] = new Array();
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeTruthy();
  })  
  test('Empty object constructor', () => {
    // Setup
    const input = new Object();
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Empty map', () => {
    // Setup
    const input = new Map();
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Empty set', () => {
    // Setup
    const input = new Set()
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('True', () => {
    // Setup
    const input = true
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('One', () => {
    // Setup
    const input = 1
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Big one', () => {
    // Setup
    const input = 1n
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('String literal', () => {
    // Setup
    const input = "a"
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Array literal', () => {
    // Setup
    const input: string[] = ["a"]
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })  
  test('Object literal', () => {
    // Setup
    const input = {a: 1}
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('String constuctor', () => {
    // Setup
    const input = new String("a");
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Array constructor', () => {
    // Setup
    const input: string[] = new Array("a");
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })  
  test('Object constructor', () => {
    // Setup
    const input = new Object({a: 1});
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Class', () => {
    // Setup
    class Input {}
    // Test
    const result = isEmptiness(Input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Map', () => {
    // Setup
    const input = new Map([["a", 1]]);
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Set', () => {
    // Setup
    const input = new Set("a")
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Symbol', () => {
    // Setup
    const input = Symbol()
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Arrow function', () => {
    // Setup
    const input = () => {};
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Function', () => {
    // Setup
    function input() {
      return;
    };
    // Test
    const result = isEmptiness(input)
    // Assert
    expect(result).toBeFalsy();
  })
})

describe('substantiveness', () => {
  test('undefined', () => {
    // Setup
    const input = undefined
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('null', () => {
    // Setup
    const input = undefined
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('NaN', () => {
    // Setup
    const input = NaN
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('False', () => {
    // Setup
    const input = false
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Zero', () => {
    // Setup
    const input = 0
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Big zero', () => {
    // Setup
    const input = 0n
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty string literal', () => {
    // Setup
    const input = ""
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty array literal', () => {
    // Setup
    const input: string[] = []
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })  
  test('Empty object literal', () => {
    // Setup
    const input = {}
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty string constuctor', () => {
    // Setup
    const input = new String("");
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty array constructor', () => {
    // Setup
    const input: string[] = new Array();
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })  
  test('Empty object constructor', () => {
    // Setup
    const input = new Object();
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty map', () => {
    // Setup
    const input = new Map();
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('Empty set', () => {
    // Setup
    const input = new Set()
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeFalsy();
  })
  test('True', () => {
    // Setup
    const input = true
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('One', () => {
    // Setup
    const input = 1
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Big one', () => {
    // Setup
    const input = 1n
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('String literal', () => {
    // Setup
    const input = "a"
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Array literal', () => {
    // Setup
    const input: string[] = ["a"]
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })  
  test('Object literal', () => {
    // Setup
    const input = {a: 1}
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('String constuctor', () => {
    // Setup
    const input = new String("a");
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Array constructor', () => {
    // Setup
    const input: string[] = new Array("a");
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })  
  test('Object constructor', () => {
    // Setup
    const input = new Object({a: 1});
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Class', () => {
    // Setup
    class Input {}
    // Test
    const result = isSubstantive(Input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Map', () => {
    // Setup
    const input = new Map([["a", 1]]);
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Set', () => {
    // Setup
    const input = new Set("a")
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Symbol', () => {
    // Setup
    const input = Symbol()
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Arrow function', () => {
    // Setup
    const input = () => {};
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
  test('Function', () => {
    // Setup
    function input() {
      return;
    };
    // Test
    const result = isSubstantive(input)
    // Assert
    expect(result).toBeTruthy();
  })
})

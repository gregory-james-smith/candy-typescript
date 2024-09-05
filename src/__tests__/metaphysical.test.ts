import { isEmptiness, isNothingness, isSubstantive } from '../metaphysical'

describe('isNothingness', () => {
  const f = isNothingness;
  describe('nothingness', () => {
    const check = true;
    test('undefined', () => {
      // Setup
      const input = undefined
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('null', () => {
      // Setup
      const input = undefined
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('NaN', () => {
      // Setup
      const input = NaN
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
  })
  describe('emptiness', () => {
    const check = false;
    test('False', () => {
      // Setup
      const input = false
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Zero', () => {
      // Setup
      const input = 0
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Big zero', () => {
      // Setup
      const input = 0n
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty string literal', () => {
      // Setup
      const input = ""
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty array literal', () => {
      // Setup
      const input: string[] = []
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty object literal', () => {
      // Setup
      const input = {}
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty string constuctor', () => {
      // Setup
      const input = new String("");
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty array constructor', () => {
      // Setup
      const input: string[] = new Array();
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty object constructor', () => {
      // Setup
      const input = new Object();
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty map', () => {
      // Setup
      const input = new Map();
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty set', () => {
      // Setup
      const input = new Set()
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
  })
  describe('substantiveness', () => {
    const check = false;
    test('True', () => {
      // Setup
      const input = true
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('One', () => {
      // Setup
      const input = 1
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Big one', () => {
      // Setup
      const input = 1n
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('String literal', () => {
      // Setup
      const input = "a"
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Array literal', () => {
      // Setup
      const input: string[] = ["a"]
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Object literal', () => {
      // Setup
      const input = { a: 1 }
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('String constuctor', () => {
      // Setup
      const input = new String("a");
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Array constructor', () => {
      // Setup
      const input: string[] = new Array("a");
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Object constructor', () => {
      // Setup
      const input = new Object({ a: 1 });
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Class', () => {
      // Setup
      class Input { }
      // Test
      const result = f(Input)
      // Assert
      expect(result).toBe(check)
    })
    test('Map', () => {
      // Setup
      const input = new Map([["a", 1]]);
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Set', () => {
      // Setup
      const input = new Set("a")
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Symbol', () => {
      // Setup
      const input = Symbol()
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Arrow function', () => {
      // Setup
      const input = () => { };
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Function', () => {
      // Setup
      function input() {
        return;
      };
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
  })
})

describe('isEmptiness', () => {
  const f = isEmptiness;
  describe('nothingness', () => {
    const check = false;
    test('undefined', () => {
      // Setup
      const input = undefined
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('null', () => {
      // Setup
      const input = undefined
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('NaN', () => {
      // Setup
      const input = NaN
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
  })
  describe('emptiness', () => {
    const check = true;
    test('False', () => {
      // Setup
      const input = false
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Zero', () => {
      // Setup
      const input = 0
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Big zero', () => {
      // Setup
      const input = 0n
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty string literal', () => {
      // Setup
      const input = ""
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty array literal', () => {
      // Setup
      const input: string[] = []
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty object literal', () => {
      // Setup
      const input = {}
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty string constuctor', () => {
      // Setup
      const input = new String("");
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty array constructor', () => {
      // Setup
      const input: string[] = new Array();
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty object constructor', () => {
      // Setup
      const input = new Object();
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty map', () => {
      // Setup
      const input = new Map();
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty set', () => {
      // Setup
      const input = new Set()
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
  })
  describe('substantiveness', () => {
    const check = false;
    test('True', () => {
      // Setup
      const input = true
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('One', () => {
      // Setup
      const input = 1
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Big one', () => {
      // Setup
      const input = 1n
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('String literal', () => {
      // Setup
      const input = "a"
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Array literal', () => {
      // Setup
      const input: string[] = ["a"]
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Object literal', () => {
      // Setup
      const input = { a: 1 }
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('String constuctor', () => {
      // Setup
      const input = new String("a");
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Array constructor', () => {
      // Setup
      const input: string[] = new Array("a");
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Object constructor', () => {
      // Setup
      const input = new Object({ a: 1 });
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Class', () => {
      // Setup
      class Input { }
      // Test
      const result = f(Input)
      // Assert
      expect(result).toBe(check)
    })
    test('Map', () => {
      // Setup
      const input = new Map([["a", 1]]);
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Set', () => {
      // Setup
      const input = new Set("a")
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Symbol', () => {
      // Setup
      const input = Symbol()
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Arrow function', () => {
      // Setup
      const input = () => { };
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Function', () => {
      // Setup
      function input() {
        return;
      };
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
  })
})

describe('isSubstantive', () => {
  const f = isSubstantive;
  describe('nothingness', () => {
    const check = false;
    test('undefined', () => {
      // Setup
      const input = undefined
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('null', () => {
      // Setup
      const input = undefined
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('NaN', () => {
      // Setup
      const input = NaN
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
  })
  describe('emptiness', () => {
    const check = false;
    test('False', () => {
      // Setup
      const input = false
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Zero', () => {
      // Setup
      const input = 0
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Big zero', () => {
      // Setup
      const input = 0n
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty string literal', () => {
      // Setup
      const input = ""
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty array literal', () => {
      // Setup
      const input: string[] = []
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty object literal', () => {
      // Setup
      const input = {}
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty string constuctor', () => {
      // Setup
      const input = new String("");
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty array constructor', () => {
      // Setup
      const input: string[] = new Array();
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty object constructor', () => {
      // Setup
      const input = new Object();
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty map', () => {
      // Setup
      const input = new Map();
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Empty set', () => {
      // Setup
      const input = new Set()
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
  })
  describe('substantiveness', () => {
    const check = true;
    test('True', () => {
      // Setup
      const input = true
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('One', () => {
      // Setup
      const input = 1
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Big one', () => {
      // Setup
      const input = 1n
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('String literal', () => {
      // Setup
      const input = "a"
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Array literal', () => {
      // Setup
      const input: string[] = ["a"]
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Object literal', () => {
      // Setup
      const input = { a: 1 }
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('String constuctor', () => {
      // Setup
      const input = new String("a");
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Array constructor', () => {
      // Setup
      const input: string[] = new Array("a");
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Object constructor', () => {
      // Setup
      const input = new Object({ a: 1 });
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Class', () => {
      // Setup
      class Input { }
      // Test
      const result = f(Input)
      // Assert
      expect(result).toBe(check)
    })
    test('Map', () => {
      // Setup
      const input = new Map([["a", 1]]);
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Set', () => {
      // Setup
      const input = new Set("a")
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Symbol', () => {
      // Setup
      const input = Symbol()
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Arrow function', () => {
      // Setup
      const input = () => { };
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
    test('Function', () => {
      // Setup
      function input() {
        return;
      };
      // Test
      const result = f(input)
      // Assert
      expect(result).toBe(check)
    })
  })
})
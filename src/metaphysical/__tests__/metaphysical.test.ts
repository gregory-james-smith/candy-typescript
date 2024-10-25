import { isEmptiness, isNothingness, isSubstantive } from "../metaphysical";

describe.each([
  // Function, Nothingness result, Emptiness result, Substantiveness result
  [isNothingness, true, false, false],
  [isEmptiness, false, true, false],
  [isSubstantive, false, false, true],
])(
  "metaphysical",
  (f, nothingnessCheck, emptinessCheck, substantivenessCheck) => {
    describe(`${f.name}`, () => {
      test("no arguments is vacuously true", () => {
        // Test
        const result = f();
        // Assert
        expect(result).toBeTruthy();
      });
      describe.each([
        ["undefined", undefined],
        ["null", null],
        ["NaN", NaN],
      ])(`nothingness`, (message, input) => {
        test(message, () => {
          // Test
          const result = f(input);
          // Assert
          expect(result).toBe(nothingnessCheck);
        });
      });
      describe.each([
        ["false", false],
        ["zero", 0],
        ["big zero", 0n],
        ["empty string literal", ""],
        ["empty array literal", []],
        ["empty object literal", {}],
        ["empty string constructor", new String("")],
        ["empty array constructor", new Array()],
        ["empty object constructor", new Object()],
        ["empty map", new Map()],
        ["empty set", new Set()],
      ])("emptiness", (message, input) => {
        test(message, () => {
          // Test
          const result = f(input);
          // Assert
          expect(result).toBe(emptinessCheck);
        });
      });
      describe.each([
        ["true", true],
        ["one", 1],
        ["big one", 1n],
        ["string literal", "a"],
        ["array literal", ["a"]],
        ["object literal", { a: 1 }],
        ["string constructor", new String("a")],
        ["array constructor", new Array("a")],
        ["object constructor", new Object({ a: 1 })],
        ["class", class Input {}],
        ["map", new Map([["a", 1]])],
        ["set", new Set("a")],
        ["symbol", Symbol()],
        ["arrow function", () => {}],
        [
          "function",
          function input() {
            return;
          },
        ],
      ])("substantiveness", (message, input) => {
        test(message, () => {
          // Test
          const result = f(input);
          // Assert
          expect(result).toBe(substantivenessCheck);
        });
      });
    });
  }
);

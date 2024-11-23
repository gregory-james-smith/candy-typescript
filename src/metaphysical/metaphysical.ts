/**
 * @file Broadly speaking nothingness is analogous to nullish, emptiness to falsy, and substantive to truthy.
 */

import type { Empty, Nothing } from "./metaphysical.types";

/**
 * Checks if the argument is nothing
 *
 * Nothingness includes NaN and all the nullish
 * values -- null, undefined.
 *
 * Nothingness is not emptiness or substance.
 *
 * @param arg The argument to check
 *
 * @returns True iff the argument is nothing
 */
export function isNothing(arg: unknown): arg is Nothing {
	switch (typeof arg) {
		case "undefined":
			return true;
		case "number":
			return Number.isNaN(arg);
		case "bigint":
			return Number.isNaN(arg);
		case "object":
			return arg === null;
		default: // other types
			return false;
	}
}

/**
 * Checks if all the arguments are nothing.
 *
 * Nothingness includes NaN and all the nullish
 * values -- null, undefined.
 *
 * Nothingness is not emptiness or substance.
 *
 * Cannot be used as a type guard because a type
 * predicate cannot reference a rest parameter. See
 * {@link isNothing} instead.
 *
 * @param args The arguments to check
 *
 * @returns True iff all the arguments are nothing
 */
export function isNothingness(...args: unknown[]): boolean {
	return args.every((arg) => isNothing(arg));
}

/**
 * Checks if the argument is empty.
 *
 * Emptiness includes empty arrays, empty sets,
 * empty maps, empty strings, empty objects,
 * zero and false.
 *
 * Emptiness is not nothingness or substance.
 *
 * @param arg The argument to check
 *
 * @returns True iff the argument are empty
 */
export function isEmpty(arg: unknown): arg is Empty {
	switch (typeof arg) {
		case "undefined":
			return false;
		case "boolean":
			return arg === false;
		case "string":
			return arg.length === 0;
		case "number":
			return arg === 0;
		case "bigint":
			return arg === 0n;
		case "function":
			return false;
		case "symbol":
			return false;
		default: {
			// object
			if (arg === null) {
				return false;
			}
			if (arg instanceof Set) {
				return arg.size === 0;
			}
			if (arg instanceof Map) {
				return arg.size === 0;
			}
			if (Array.isArray(arg)) {
				return arg.length === 0;
			}
			if (arg instanceof String) {
				return arg.length === 0;
			}

			const properties = Object.getOwnPropertyNames(arg);
			const symbols = Object.getOwnPropertySymbols(arg);
			return properties.length === 0 && symbols.length === 0;
		}
	}
}

/**
 * Checks if all the arguments are empty.
 *
 * Emptiness includes empty arrays, empty sets,
 * empty maps, empty strings, empty objects,
 * zero and false.
 *
 * Emptiness is not nothingness or substance.
 *
 * Cannot be used as a type guard because a type
 * predicate cannot reference a rest parameter. See
 * {@link isEmpty} instead.
 *
 * @param args The arguments to check
 *
 * @returns True iff all the arguments are empty
 */
export function isEmptiness(...args: unknown[]): boolean {
	return args.every((arg) => isEmpty(arg));
}

/**
 * Checks if the argument has substance.
 *
 * Substance include non-empty arrays, non-empty
 * sets, non-empty maps, non-empty strings,
 * non-empty objects, and any number that is not
 * zero, and true. All functions and symbols are
 * considered to have substance.
 *
 * Substance is not nothingness or emptiness.
 *
 * @param arg The argument to check
 *
 * @returns True iff the argument has substance
 */
export function isSubstance(arg: unknown) {
	switch (typeof arg) {
		case "undefined":
			return false;
		case "boolean":
			return arg === true;
		case "string":
			return arg.length !== 0;
		case "number":
			return arg !== 0 && !Number.isNaN(arg);
		case "bigint":
			return arg !== 0n && !Number.isNaN(arg);
		case "function":
			return true;
		case "symbol":
			return true;
		default: {
			// object
			if (arg === null) {
				return false;
			}
			if (arg instanceof Set) {
				return arg.size !== 0;
			}
			if (arg instanceof Map) {
				return arg.size !== 0;
			}
			if (Array.isArray(arg)) {
				return arg.length !== 0;
			}
			if (arg instanceof String) {
				return arg.length !== 0;
			}

			const properties = Object.getOwnPropertyNames(arg);
			const symbols = Object.getOwnPropertySymbols(arg);
			return properties.length !== 0 || symbols.length !== 0;
		}
	}
}

/**
 * Checks if all the arguments have substance.
 *
 * Substance include non-empty arrays, non-empty
 * sets, non-empty maps, non-empty strings,
 * non-empty objects, and any number that is not
 * zero, and true. All functions and symbols are
 * considered to have substance.
 *
 * Substance is not nothingness or emptiness.
 *
 * Cannot be used as a type guard because a type
 * predicate cannot reference a rest parameter. See
 * {@link isSubstance} instead.
 *
 * @param args The arguments to check
 *
 * @returns True iff all the arguments have substance
 */
export function isSubstantive(...args: unknown[]): boolean {
	return args.every((arg) => isSubstance(arg));
}

export type Nothing = void | null | undefined;

export type EmptyString = "";
export type EmptyArray = void[];

/**
 * An empty object
 * 
 * The problem with `{ [key in string]: never }}` is that any union type
 * `T | EmptyObject` is subject to a heuristic where accessing a property
 * incorrectly infers the variable to be type `T`.
 */
export type EmptyObject = { [K in keyof any]?: never };

export type EmptySet = Set<void>;
export type EmptyMap = Map<void, void>;
export type Empty =
	| false
	| 0
	| 0n
	| EmptyString
	| EmptyObject
	| EmptyArray
	| EmptySet
	| EmptyMap;

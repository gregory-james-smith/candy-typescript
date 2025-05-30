export type Nothing = void | null | undefined;

export type EmptyString = "";
export type EmptyArray = void[];
export type EmptyObject = { [key in string]: never };
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

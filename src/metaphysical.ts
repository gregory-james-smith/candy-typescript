
/**
 * Checks if all the arguments are nothing.
 * 
 * Nothingness includes NaN and all the nullish
 * values -- null, undefined.
 * 
 * Nothingness is not emptiness or substance.
 * 
 * @param args The arguments to check
 * 
 * @returns True iff all the arguments are nothing
 */
export function isNothingness(...args: any[]) {
  return args.every(arg => {
    switch (typeof arg) {
      case 'undefined':
        return true;
      case 'number':
        return Number.isNaN(arg);
      case 'bigint':
        return Number.isNaN(arg);
      case 'object':
        return arg === null;
      default: // other types
        return false;
    }
  })
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
 * @param args The arguments to check
 * 
 * @returns True iff all the arguments are empty
 */
export function isEmptiness(...args: any[]) {
  return args.every(arg => {
    switch (typeof arg) {
      case 'undefined':
        return false;
      case 'boolean':
        return arg === false;
      case 'string':
        return arg.length === 0;
      case 'number':
        return arg === 0;
      case 'bigint':
        return arg === 0n;
      case 'function':
        return false;
      case 'symbol':
        return false;
      case 'object':
        return isEmptyObject(arg);
      default:
        throw new Error(`Argument has unknown type ${typeof arg}.`);
    }
  })
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
 * @param args The arguments to check
 * 
 * @returns True iff all the arguments have substance
 */
export function isSubstantive(...args: any[]): boolean {
  return args.every(arg => {
    switch (typeof arg) {
      case 'undefined':
        return false;
      case 'boolean':
        return arg === true;
      case 'string':
        return arg.length !== 0;
      case 'number':
        return arg !== 0 && !Number.isNaN(arg);
      case 'bigint':
        return arg !== 0n && !Number.isNaN(arg);
      case 'function':
        return true;
      case 'symbol':
        return true;
      case 'object':
        return isSubstantiveObject(arg)
      default:
        throw new Error(`Argument has unknown type ${typeof arg}.`);
    }
  })
}

/**
 * Not to be used externally because it might be misleading.
 * This will properly check an argument which returns 
 * 'object' using typeof, it will not check an argument of 
 * type Object properly. For example, undefined will error.
 * 
 * @private
 */
function isEmptyObject(arg: Object) {
  if (arg === null) {
    return false
  } else if (arg instanceof Set) {
    return arg.size === 0
  } else if (arg instanceof Map) {
    return arg.size === 0
  } else if (arg instanceof Array) {
    return arg.length === 0
  }

  const properties = Object.getOwnPropertyNames(arg);
  const symbols = Object.getOwnPropertySymbols(arg);
  return properties.length === 0 && symbols.length === 0;
}

/**
 * Not to be used externally because it might be misleading.
 * This will properly check an argument which returns 
 * 'object' using typeof, it will not check an argument of 
 * type Object properly. For example, undefined will error.
 * 
 * @private
 */
function isSubstantiveObject(arg: Object) {
  if (arg === null) {
    return false
  } else if (arg instanceof Set) {
    return arg.size !== 0
  } else if (arg instanceof Map) {
    return arg.size !== 0
  } else if (arg instanceof Array) {
    return arg.length !== 0
  }

  const properties = Object.getOwnPropertyNames(arg);
  const symbols = Object.getOwnPropertySymbols(arg);
  return properties.length !== 0 || symbols.length !== 0;
}


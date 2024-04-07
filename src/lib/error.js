/**
 * @template [T=void]
 * @param {string|Error|unknown} value
 * @returns {import("./types").Unsafe<T>}
 */
export function error(value) {
  if (value instanceof Error) {
    // @ts-ignore
    return [ null, value ]
  }
  // @ts-ignore
  return [ null, new Error(`${value}`) ]
}

/// <reference types="node" />
import * as fsSync from "fs"

type E<T extends string> = typeof fsSync extends { [m in T]: any }
  ? typeof fsSync[T]
  : undefined
export const readdirSync: E<"readdirSync">
export const readFileSync: E<"readFileSync">
export const writeFileSync: E<"writeFileSync">
declare namespace _default {
  export { readdirSync }
  export { readFileSync }
  export { writeFileSync }
}
export default _default

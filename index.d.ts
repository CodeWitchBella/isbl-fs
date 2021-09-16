/// <reference types="node" />
import * as fsPromises from "fs/promises"

type E<T extends string> = typeof fsPromises extends { [m in T]: any }
  ? typeof fsPromises[T]
  : undefined
export const access: E<"access">
export const appendFile: E<"appendFile">
export const chmod: E<"chmod">
export const chown: E<"chown">
export const copyFile: E<"copyFile">
export const cp: E<"cp">
export const lchown: E<"lchown">
export const lutimes: E<"lutimes">
export const link: E<"link">
export const lstat: E<"lstat">
export const mkdir: E<"mkdir">
export const mkdtemp: E<"mkdtemp">
export const open: E<"open">
export const opendir: E<"opendir">
export const readdir: E<"readdir">
export const readFile: E<"readFile">
export const readlink: E<"readlink">
export const realpath: E<"realpath">
export const rename: E<"rename">
export const rmdir: E<"rmdir">
export const rm: E<"rm">
export const stat: E<"stat">
export const symlink: E<"symlink">
export const truncate: E<"truncate">
export const unlink: E<"unlink">
export const utimes: E<"utimes">
export const watch: E<"watch">
export const writeFile: E<"writeFile">
declare namespace _default {
  export { access }
  export { appendFile }
  export { chmod }
  export { chown }
  export { copyFile }
  export { cp }
  export { lchown }
  export { lutimes }
  export { link }
  export { lstat }
  export { mkdir }
  export { mkdtemp }
  export { open }
  export { opendir }
  export { readdir }
  export { readFile }
  export { readlink }
  export { realpath }
  export { rename }
  export { rmdir }
  export { rm }
  export { stat }
  export { symlink }
  export { truncate }
  export { unlink }
  export { utimes }
  export { watch }
  export { writeFile }
}
export default _default

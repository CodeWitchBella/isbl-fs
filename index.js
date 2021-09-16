import * as fsPromises from "fs/promises"

// Adding new function:
// 1. add `export const ...` here
// 2. add it to `export default { ... }`
// 3. add it to `index.d.ts` (twice)
export const access = wrap("access")
export const appendFile = wrap("appendFile")
export const chmod = wrap("chmod")
export const chown = wrap("chown")
export const copyFile = wrap("copyFile")
export const cp = wrap("cp")
// lchmod is deprecated, therefore I am not reexporting it
export const lchown = wrap("lchown")
export const lutimes = wrap("lutimes")
export const link = wrap("link")
export const lstat = wrap("lstat")
export const mkdir = wrap("mkdir")
export const mkdtemp = wrap("mkdtemp")
export const open = wrap("open")
export const opendir = wrap("opendir")
export const readdir = wrap("readdir")
export const readFile = wrap("readFile")
export const readlink = wrap("readlink")
export const realpath = wrap("realpath")
export const rename = wrap("rename")
export const rmdir = wrap("rmdir")
export const rm = wrap("rm")
export const stat = wrap("stat")
export const symlink = wrap("symlink")
export const truncate = wrap("truncate")
export const unlink = wrap("unlink")
export const utimes = wrap("utimes")
export const watch = wrap("watch")
export const writeFile = wrap("writeFile")
export default {
  access,
  appendFile,
  chmod,
  chown,
  copyFile,
  cp,
  lchown,
  lutimes,
  link,
  lstat,
  mkdir,
  mkdtemp,
  open,
  opendir,
  readdir,
  readFile,
  readlink,
  realpath,
  rename,
  rmdir,
  rm,
  stat,
  symlink,
  truncate,
  unlink,
  utimes,
  watch,
  writeFile,
}

/** @type {<M extends keyof typeof fsPromises>(method: M) => fsPromises[M]} */
function wrap(method) {
  if (!fsPromises[method]) return undefined
  Object.defineProperty(wrapper, "name", { writable: true })
  wrapper.name = fsPromises[method].name
  Object.defineProperty(wrapper, "name", { writable: false })
  return wrapper
  async function wrapper(...args) {
    try {
      return await fsPromises[method](...args)
    } catch (e) {
      const opt = { cause: e }
      const err = new Error(
        `Error in fsPromises.${method} ${args[0]}\n${e.message}`,
        opt,
      )
      Error.captureStackTrace?.(err, wrapper)
      err.code = e.code
      throw err
    }
  }
}

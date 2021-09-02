import * as fsPromises from "fs/promises"

// Adding new function:
// 1. add `export const ...` here
// 2. add it to `export default { ... }`
export const readFile = wrap("readFile")
export const writeFile = wrap("writeFile")
export const mkdir = wrap("mkdir")
export const copyFile = wrap("copyFile")
export const rm = wrap("rm")
export const open = wrap("open")
export const opendir = wrap("opendir")
export const readdir = wrap("readdir")
export default {
  readFile,
  writeFile,
  mkdir,
  copyFile,
  rm,
  open,
  opendir,
  readdir,
}

/** @type {<M extends keyof typeof fsPromises>(method: M) => fsPromises[M]} */
function wrap(method) {
  if (!fsPromises[method]) return null
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

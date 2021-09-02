import * as fsSync from "fs"

export const readdirSync = wrapSync("readdirSync")
export const readFileSync = wrapSync("readFileSync")
export const writeFileSync = wrapSync("writeFileSync")
export default {
  readdirSync,
  readFileSync,
  writeFileSync,
}

/** @type <M extends keyof typeof fsSync>(method: M) => fsSync[M] */
function wrapSync(method) {
  if (!fsSync[method]) return null
  Object.defineProperty(wrapper, "name", { writable: true })
  wrapper.name = fsSync[method].name
  Object.defineProperty(wrapper, "name", { writable: false })
  return wrapper
  function wrapper(...args) {
    try {
      return fsSync[method](...args)
    } catch (e) {
      const opt = { cause: e }
      const err = new Error(
        `Error in fs.${method} ${args[0]}\n${e.message}`,
        opt,
      )
      err.code = e.code
      throw err
    }
  }
}

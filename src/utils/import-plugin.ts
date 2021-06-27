import { isObject } from '@xuanmo/javascript-utils'

interface Modules {
  [key: string]: any
}

export default (modules: Modules) => {
  const result: {
    [key: string]: Modules
  } = {}

  for (const path in modules) {
    const module = modules[path]
    const { moduleName } = /(?<moduleName>[a-z\d-_]+)\.ts$/i.exec(path)?.groups || {}
    result[moduleName] = {
      namespaced: true,
      ...(isObject(module.default) ? module.default : module)
    }
  }

  return result
}

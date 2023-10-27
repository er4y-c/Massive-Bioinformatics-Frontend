/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
export function replaceDotsWithUnderscores(obj) {
    if (typeof obj === 'object') {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const newKey = key.replace(/\./g, '_')
          obj[newKey] = obj[key]
          if (key !== newKey) {
            delete obj[key]
          }

          if (typeof obj[newKey] === 'object') {
            replaceDotsWithUnderscores(obj[newKey])
          }
        }
      }
    }
  }

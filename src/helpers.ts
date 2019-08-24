import { IMappedObject, IHTTPMethod } from './types'

export const createObjectFromFields = (fields: string[]): IMappedObject => {
  const splitFields = transformFieldsToArrays(fields)

  return splitFields.reduce((object: IMappedObject, currentField: string[]): IMappedObject => {
    return createObject(currentField, object)
  }, {})
}

const transformFieldsToArrays = (fields: string[]): string[][] => {
  return fields.map((fieldString: string) => {
    return fieldString.split('.')
  })
}

const createObject = (objectFields: string[], startObject: IMappedObject = {}) => {
  const depth = objectFields.length
  const [key] = objectFields

  if (depth === 1) {
    startObject[key] = null
    return startObject
  }

  const [, ...nextLevelMap] = objectFields
  startObject[key] = createObject(nextLevelMap, startObject[key] || undefined)

  return startObject
}

export const checkHTTPMethod = (method: string| undefined): IHTTPMethod => {
  if (method &&
    (
      method === 'POST' ||
      method === 'GET' ||
      method === 'DELETE' ||
      method === 'PUT'
    )
  ) {
    return method
  }

  return false
}

import { IMappedObject } from './types'

export const createObjectFromMaps = (maps: string[])=> {
  const splitMaps = transormMapsToArray(maps)
  
  return splitMaps.reduce((obj:IMappedObject, currentMap: string[]):IMappedObject => {
    return createObject(currentMap, obj)
  }, {})
}

const transormMapsToArray = (maps: string[]): string[][] => {
  return maps.map((mapString:string)=>{
    return mapString.split('.')
  })
}

const createObject =(objectMap: string[], startObject = {}) => {
  const depth = objectMap.length
  const [key] = objectMap
  if(depth === 1) {
    startObject[key] = null
    return startObject
  }
  const [, ...nextLevelMap] = objectMap
  startObject[key] = createObject(nextLevelMap, startObject[key])

  return startObject
}



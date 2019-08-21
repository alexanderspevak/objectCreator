const objectCreator =(objectMap: string[], startObject = {}) => {
  const depth = objectMap.length
  const key = objectMap[0]
  if(depth === 1) {
    startObject[key] = null
    return startObject
  }
  const [, ...nextLevelMap] = objectMap
  startObject[key] = objectCreator(nextLevelMap, startObject[key])

  return startObject
}

console.log(JSON.stringify(objectCreator(['ahoj', 'cau', 'sevas',], {zdravim: 'neco', ahoj:{pozdrav: 'poz'}})))


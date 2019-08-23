import { IncomingMessage, ServerResponse }from 'http'
import { createObjectFromMaps } from './helpers'
import { INVALID_JSON_FORMAT } from './constants'

export const handleCreateObjectRequest = (req: IncomingMessage, res: ServerResponse) => {
    let body = ''
    req.on('data', (chunk) => {
        console.log(chunk)
    body = body + chunk
        })
const { maps }= JSON.parse(body)
if(maps && maps instanceof Array) {
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200)

  return res.end(JSON.stringify(createObjectFromMaps(maps)))
}

res.writeHead(400)
return res.end(INVALID_JSON_FORMAT)
}
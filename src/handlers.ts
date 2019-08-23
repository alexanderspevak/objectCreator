import { IncomingMessage, ServerResponse }from 'http'
import { createObjectFromMaps } from './helpers'
import { INVALID_JSON_FORMAT } from './constants'

export const handleCreateObjectRequest = (req: IncomingMessage, res: ServerResponse) => {
    let body = ''
    req.on('data', (chunk) => {
      body = body + chunk
    })
    req.on('end', () => {
      try {
        console.log('body', body)
        const { maps }= JSON.parse(body)
        if(maps && maps instanceof Array) {
          res.writeHead(200, {
            'Content-Type': 'application/json'
          })

          return res.end(JSON.stringify(createObjectFromMaps(maps)))
        }
        res.writeHead(400)

        return res.end(INVALID_JSON_FORMAT)
      }catch(e){
        return res.end(INVALID_JSON_FORMAT)
      }

    })

}

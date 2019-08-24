import { IncomingMessage, ServerResponse } from 'http'
import { createObjectFromFields } from './helpers'
import { INVALID_JSON_FORMAT } from './constants'

export const handleCreateObjectRequest = (req: IncomingMessage, res: ServerResponse): void => {
  let body = ''

  req.on('data', (chunk) => {
    body = body + chunk
  })
  req.on('end', () => {
    try {
      const { fields } = JSON.parse(body)

      if (fields && fields instanceof Array) {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        })

        return res.end(JSON.stringify(createObjectFromFields(fields)))
      }

      res.writeHead(400)

      res.end(INVALID_JSON_FORMAT)
    } catch (e) {
      res.writeHead(400)
      return res.end(INVALID_JSON_FORMAT)
    }
  })
}

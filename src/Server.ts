import { createServer } from 'http'
import { INVALID_ROUTE } from './constants'
import { Router } from './Router'
import { checkHTTPMethod } from './helpers'

export class Server {
  routes: Router

  applyRoutes = (routes: Router) => {
    this.routes = routes
  }

  listen = (port: number) => {
    createServer((req, res) => {
      const { url, method } = req
      const checkedMethod = checkHTTPMethod(method)

      if (
        checkedMethod &&
          checkHTTPMethod(checkedMethod) &&
          url &&
          this.routes[checkedMethod] &&
          this.routes[checkedMethod][url]
      ) {
        return this.routes[checkedMethod][url](req, res)
      }

      res.writeHead(400)

      return res.end(INVALID_ROUTE)
    }).listen(port)
  }
}

export const server = new Server()

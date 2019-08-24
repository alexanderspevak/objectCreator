import { createServer } from 'http'
import { INVALID_ROUTE } from './constants'
import { Router } from './Router'

export class Server {
  routes: Router

  applyRoutes (routes) {
    this.routes = routes
  }

  listen (port: number) {
    createServer((req, res) => {
      const { url, method } = req

      if (this.routes[method] && this.routes[method][url]) {
        return this.routes[method][url](req, res)
      }

      res.writeHead(400)

      return res.end(INVALID_ROUTE)
    }).listen(port)
  }
}

export const server = new Server()

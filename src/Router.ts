import { IHandler, IRoute } from './types'

export class Router {
  GET: IRoute = {}

  POST: IRoute = {}

  PUT: IRoute = {}

  DELETE: IRoute = {}

  get (path: string, handler: IHandler) {
    this.GET[path] = handler
  }

  post (path: string, handler: IHandler) {
    this.POST[path] = handler
  }

  put (path: string, handler: IHandler) {
    this.PUT[path] = handler
  }

  delete (path: string, handler: IHandler) {
    this.DELETE[path] = handler
  }
}

export const router = new Router()

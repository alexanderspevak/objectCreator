import { IHandler, IRoute } from './types'

export class Router {
  public GET: IRoute = {}

  public POST: IRoute = {}

  public PUT: IRoute = {}

  public DELETE: IRoute = {}

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

export const router:any = new Router()

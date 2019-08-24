import { IncomingMessage, ServerResponse } from 'http'

export interface IMappedObject {
    [key: string]: IMappedObject | null
  }

export interface IRoute {
  [key: string]: IHandler
}

export type IHandler = (req:IncomingMessage, res: ServerResponse) => void | ServerResponse

export type IHTTPMethod = false | 'GET' | 'POST' | 'DELETE' | 'PUT'

import * as cluster from 'cluster'
import * as http from 'http'
import * as os from 'os'
import * as urlService from 'url'
import { handleCreateObjectRequest } from './handlers'
import { CREATE_OBJECT_ROUTE, UNUSED_ROUTES_MESSAGE } from './constants'

if(cluster.isMaster){
const numberOfCores = os.cpus().length
    console.log(`Master ${process.pid} started`);
    for (let i = 0; i < numberOfCores; i++) {
      cluster.fork();
    }
  } else {
    http.createServer((req, res) => {
    try {
        const { url, method } = req
        const { pathname } = urlService.parse(url, true)
        if(pathname === CREATE_OBJECT_ROUTE && method === 'POST') {
            return handleCreateObjectRequest(req,res)
        }

        res.writeHead(200)
        res.end(UNUSED_ROUTES_MESSAGE);
    } catch (error) {
        res.writeHead(500)
        res.end(error)
    }

    }).listen(8000)
  }


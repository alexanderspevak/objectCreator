import * as cluster from 'cluster'
import * as os from 'os'
import { server } from './Server'
import { router } from './routes'

if (cluster.isMaster) {
  const numberOfCores = os.cpus().length
  console.log(`Master ${process.pid} started`)
  for (let i = 0; i < numberOfCores; i++) {
    cluster.fork()
  }
} else {
  server.applyRoutes(router)
  server.listen(8000)
  console.log(`Worker ${process.pid} started`)
}

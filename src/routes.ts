import { router } from './Router'
import { handleCreateObjectRequest } from './handlers'
import { CREATE_OBJECT_ROUTE } from './constants'

router.post(CREATE_OBJECT_ROUTE, handleCreateObjectRequest)
router.get('/', (req, res) => res.end('hello world'))

export { router }

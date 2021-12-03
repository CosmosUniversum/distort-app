import { Router } from 'express'
import * as tasteDiveApiCtrl from '../controllers/tasteDiveApi.js'

const router = Router()

router.get('/:type&name', tasteDiveApiCtrl.getSuggestions)

export { router }
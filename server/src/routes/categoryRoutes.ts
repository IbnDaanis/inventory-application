import { Router } from 'express'
import { getCategories } from '../controllers/categoryControllers'

const router = Router()

router.route('/').get(getCategories)

export default router

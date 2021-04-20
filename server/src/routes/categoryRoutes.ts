import { Router } from 'express'
import { addCategory, getCategories } from '../controllers/categoryControllers'

const router = Router()

router.route('/').get(getCategories)
router.route('/add').post(addCategory)

export default router

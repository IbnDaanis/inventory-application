import { Router } from 'express'
import { addCategory, deleteCategory, getCategories } from '../controllers/categoryControllers'

const router = Router()

router.route('/').get(getCategories)
router.route('/add').post(addCategory)
router.route('/remove').delete(deleteCategory)

export default router

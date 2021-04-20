import { Router } from 'express'
import { getItems, addItem } from '../controllers/itemsControllers'

const router = Router()

router.route('/').get(getItems)
router.route('/add').post(addItem)

export default router

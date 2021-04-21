import { Router } from 'express'
import { getItems, addItem, deleteItem } from '../controllers/itemsControllers'

const router = Router()

router.route('/').get(getItems)
router.route('/add').post(addItem)
router.route('/remove/:id').delete(deleteItem)

export default router

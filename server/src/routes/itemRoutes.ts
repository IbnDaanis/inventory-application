import { Router } from 'express'
import { getItems, addItem, deleteItem } from '../controllers/itemsControllers'

const router = Router()

router.route('/category/:id').get(getItems)
router.route('/add').post(addItem)
router.route('/remove').delete(deleteItem)

export default router

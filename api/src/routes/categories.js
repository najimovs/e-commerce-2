import { Router } from "express"
import { executeQuery } from "../utils/db.js"

const router = new Router()

router.get( "/", async ( _, res ) => {

	res.send( await executeQuery( `
		select
			c.name name,
			count(p.category_id) count_of_products
		from products p
		join categories c on c.id = p.category_id
		group by c.id
	` ) )
} )

export default router

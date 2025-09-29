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

router.post( "/", async ( req, res ) => {

	if ( !req.body ) {

		res.status( 400 ).end()
		return
	}

	const { name } = req.body

	if ( !name ) {

		res.status( 400 ).end()
		return
	}

	try {

		await executeQuery( `
			insert into categories(name)
			values ($1)
		`, name )

		res.status( 201 ).send( { message: "ok" } )
	}
	catch( error ) {

		res.status( 400 ).send( { message: error.message } )
	}
} )

export default router

import express from "express"
import cors from "cors"
import { executeQuery } from "./utils/db.js"

const server = express()
server.use( cors() )
server.use( express.json() )

server.get( "/categories", async ( _, res ) => {

	res.send( await executeQuery( `
		select
			c.name name,
			count(p.category_id) count_of_products
		from products p
		join categories c on c.id = p.category_id
		group by c.id
	` ) )
} )

const ITEMS_PER_PAGE = 10

server.get( "/products/:cid", async ( req, res ) => {

	const categoryID = parseInt( req.params.cid )
	const page = req.query.page || 1

	const offset = ( page - 1 ) * ITEMS_PER_PAGE

	res.send( await executeQuery( `

		SELECT * from products
		offset $1
		limit $2
	`, offset, ITEMS_PER_PAGE ) )
} )

server.listen( 4000, () => console.info( ":4000" ) )

import express from "express"
import cors from "cors"
import { executeQuery } from "./utils/db.js"

import categories from "./routes/categories.js"

const server = express()
server.use( cors() )
server.use( express.json() )
server.use( "/categories", categories )

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

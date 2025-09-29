import express from "express"
import cors from "cors"
import { executeQuery } from "./db.js"

const server = express()
server.use( cors() )
server.use( express.json() )

server.get( "/categories", async ( _, res ) => {

	res.send( await executeQuery( `
		select
			c.name name,
			count(p.c_id) count_of_products
		from products p
		join categories c on c.id = p.c_id
		group by c.id
	` ) )
} )

server.get( "/products/:cid", async ( req, res ) => {

	const categoryID = parseInt( req.params.cid )

	console.log( req.query )

	res.send( await executeQuery( `

		SELECT * from products
		WHERE c_id = $1
	`, categoryID ) )
} )

server.listen( 4000, () => console.info( ":4000" ) )

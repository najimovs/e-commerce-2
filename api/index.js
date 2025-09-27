import express from "express"
import cors from "cors"

const server = express()
server.use( cors() )
server.use( express.json() )

server.get( "/categories", ( _, res ) => {

	res.send( [
		{
			id: 1,
			name: "Electronics"
		}
	] )
} )

server.get( "/products/:cid", ( _, res ) => {

	res.send( [
		{
			id: 1,
			name: "iPhone 15 Pro",
			price: 1299,
			img_url: "/image/no_image.png"
		}
	] )
} )

server.listen( 4_000, () => console.info( ":4000" ) )

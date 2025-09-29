import express from "express"
import cors from "cors"

import categories from "./routes/categories.js"
import products from "./routes/products.js"

const server = express()

server.use( cors() )
server.use( express.json() )
server.use( "/categories", categories )
server.use( "/products", products )

server.listen( 4000, () => console.info( ":4000" ) )

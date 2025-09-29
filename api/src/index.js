import express from "express"
import cors from "cors"

import categories from "./routes/categories.js"
import products from "./routes/products.js"
import users from "./routes/users.js"

const server = express()

server.use( cors() )
server.use( express.json() )
server.use( "/categories", categories )
server.use( "/products", products )
server.use( "/users", users )

server.listen( 4000, () => console.info( ":4000" ) )

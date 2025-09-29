import { Router } from "express"
import { executeQuery } from "../utils/db.js"

const router = new Router()

router.get( "/", async ( _, res ) => {

	res.send( await executeQuery( `select id, username from users` ) )
} )

export default router

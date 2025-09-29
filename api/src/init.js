import { promises as fs } from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { Client } from "pg"

// CONSTANTS
const __dirname = path.dirname( fileURLToPath( import.meta.url ) )

// DB CLIENT (POSTGRES)
let client = new Client( {
	user: "postgres",
	password: "math",
	host: "localhost",
	port: 5432,
	database: "postgres",
} )

init()

async function init() {

	await client.connect()

	// CLEANUP
	await client.query( "drop database if exists ecommerce" )

	// CREATE DATABASE
	await client.query( "create database ecommerce" )
	console.log( "CREATE DATABSE: OK" )

	client = new Client( {
		user: "postgres",
		password: "math",
		host: "localhost",
		port: 5432,
		database: "ecommerce",
	} )

	await client.connect()

	// CREATE TABLES
	const schemeSQL = await fs.readFile( path.join( __dirname, "misc", "schema.sql" ), "utf8" )
	await client.query( schemeSQL )
	console.log( "CREATE TABLES: OK" )

	// INSERT DATA
	const dataSQL = await fs.readFile( path.join( __dirname, "misc", "data.sql" ), "utf8" )
	await client.query( dataSQL )
	console.log( "INSERT DATA: OK" )

	process.exit( 0 )
}

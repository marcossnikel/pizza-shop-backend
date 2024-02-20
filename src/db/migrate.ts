import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import chalk from 'chalk'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { env } from '../env'

const connection = postgres(env.DATABASE_URL, { max: 1 })

const db = drizzle(connection)

await migrate(db, { migrationsFolder: 'drizzle' })
console.log(chalk.greenBright('Migrations applied succcessfully!'))

await connection.end()

process.exit()

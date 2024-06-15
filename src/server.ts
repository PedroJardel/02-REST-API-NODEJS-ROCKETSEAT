import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const server = fastify()

server.get('/hello', async () => {
  const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transactions
})

server
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })

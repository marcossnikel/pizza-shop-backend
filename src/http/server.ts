import { Elysia } from 'elysia'

const app = new Elysia().post('/restaurants', async ({ body }) => {
  return 'hello marko'
})

app.listen(3333, () => {
  console.log('Server ON 🚀')
})

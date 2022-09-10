import { Router } from 'itty-router'

const router = Router()

router.get('/', (req) => {
  const { name } = req.query ?? {};

  if (!name) {
    return new Response(`Hello nameless person!`);
  }

  return new Response(`Hello ${name}!`);
})

router.all('*', () => new Response('404, not found!', { status: 404 }))

addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request))
})

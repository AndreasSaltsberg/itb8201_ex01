import { Router } from 'itty-router'

const router = Router()

router.get('/', (req) => {
  const { name = 'nimetu isik' } = req.query ?? {};

  return new Response(`Tere, ${name}`);
})

router.all('*', () => new Response('404, not found!', { status: 404 }))

addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request))
})

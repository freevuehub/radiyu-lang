import {
  opine,
  serveStatic,
  Request,
  Response,
  join,
  dirname,
  renderFileToString,
  json,
  urlencoded,
  raw,
  text,
} from './deps.ts'
import { 가자 } from './index.ts'

const app = opine()
const PORT = parseInt(Deno.env.get('PORT') ?? '3000')
const __dirname = dirname(import.meta.url)

app.engine('.ejs', renderFileToString)
app
  .set('port', PORT)
  .set('views', join(__dirname, 'views'))
  .set('view engine', 'ejs')

app
  .use(serveStatic(join(__dirname, 'public')))
  .use(json())
  .use(urlencoded())
  .use(raw())
  .use(text())
  .use(serveStatic(join(__dirname, 'public')))

app
  .get('/', async (_: Request, response: Response) => {
    response
      .set('cache-control', 'no-store')
      .render('index')
  })
app
  .post('/run', async (request: Request, response: Response) => {
    const data = await 가자(`
      가자!
        ${request.body}
      머찐 라디유!
    `)

    try {
      response.json({ data })

    } catch (error) {
      console.log(error)
      response.json({ data: '' })
    }
  })

app.listen(Number(PORT), () => console.log(`Access it at:  http://localhost:${PORT}/ 🦕`))

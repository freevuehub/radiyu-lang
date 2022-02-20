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
  React,
  ReactDOMServer,
} from './deps.ts'
import { App } from './src/App.tsx'
import { 가자 } from './index.ts'

const app = opine()
const PORT = parseInt(Deno.env.get('PORT') ?? '216')
const __dirname = dirname(import.meta.url)

const { files } = await Deno.emit(
  './src/Client.tsx',
  {
    bundle: 'module',
    compilerOptions: {
      lib: ['dom', 'dom.iterable', 'esnext'],
    },
  },
)

app.engine('.html', renderFileToString)
app
  .set('port', PORT)
  .set('views', join(__dirname, 'views'))
  .set('view engine', 'html')

app
  .use(serveStatic(join(__dirname, 'public')))
  .use(json())
  .use(urlencoded())
  .use(raw())
  .use(text())

app
  .get('/scripts/client.js', async (_: Request, response) => {
    const js = files['deno:///bundle.js']

    response.type('application/javascript').send(js);
  })
  .get('/', async (_: Request, response: Response) => {
    const content = (ReactDOMServer as any).renderToString(
      <App isServer={true} />
    )
    const scripts = `<script type="module" src="/scripts/client.js"></script>`

    response
      .set('cache-control', 'no-store')
      .render('index', {
        content,
        scripts,
        title: '라디어 플레이그라운드 | FreeVueToy',
      })
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

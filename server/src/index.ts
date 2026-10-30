import express from 'express'

const app = express()
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'companion-server',
    time: new Date().toISOString(),
  })
})

const port = Number(process.env.PORT ?? 3000)

app.listen(port, () => {
  console.log(`server on :${port}`)
})

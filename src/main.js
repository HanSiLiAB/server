const Koa = require('koa')

const app = new Koa()

app.use((ctx, contxt) => {
    ctx.body = 'Hello World'
})

app.listen(3000, () => {
    console.log('http://localhost:3000/')
})
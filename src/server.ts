import fastify from "fastify"

const app = fastify()

        //rota   
app.get('/hello',() => {
    return 'Hello teste'
})
//porta que irá receber a informação
app.listen({
    port: 3333
  }).then(() => {
    console.log('HTTP Server Running')
})
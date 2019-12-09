const server = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 5000
const mongooseurl = 'mongodb://localhost:port:27017/dbbarang'

mongoose.connect(mongooseurl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log('connect.mongodb'))
.catch((err) => console.log(err))

server.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}))

server.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}))
server.use('/namabarang', require('./Routers/namabarang'))

server.listen(port, () => {
console.log('Sever started on port' +port)
 })
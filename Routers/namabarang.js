const namabarang = require('express').Router()
const namabarangController = require('../Controller/namabarang')

namabarang.post('/insert', (req, res) => {
    //console.log(req.body);
    namabarangController.insertnamabarang(req.body)
    .then(result => res.json(result))
    .catch(error => res.json(error))
    })

namabarang.get('/get', (req, res) => {
    namabarangController.getAllnamabarang()
    .then(result => res.json(result))
    .catch(error => res.json(error))
    })

module.exports = namabarang
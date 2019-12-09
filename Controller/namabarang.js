const namabarangModel = require('../Models/namabarang')

exports.insertnamabarang = (data) =>
    new Promise((resolve, reject) => {
                   namabarangModel.create(data)
                   .then((res) => {
                       resolve({
                           error: false,
                           pesan: 'Data tersimpan'
                       })
                   }).catch(res => {
                       reject({
                           error: true,
                           pesan: 'gagal simpan'
                       })
                   })   
                })
       
    exports.getAllnamabarang = () =>
    new Promise((resolve, reject) => {
        namabarangModel.find()
            .then(res => {
                resolve({
                    error: false,
                    pesan: 'data berhasil diambil',
                    data: res
                })
            })
            .catch( res => {
                console.log(error)
                reject ({
                    error: true,
                    pesan: 'Data tidak diambil'
                })
            })
        })
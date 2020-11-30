const formidable = require('formidable');
const fs = require('fs');
const creatNFT = require('./creatNFT');
const db = require('../database/db');
const cn = db.createConnection();
const DOMAIN = process.env.NODE_API_URL;

async function uploadImg(req, res) {
    var form = new formidable.IncomingForm();
    //Thiết lập thư mục chứa file trên server
    form.uploadDir = "./upload/image/";
    //xử lý upload
    const object = await new Promise(tv => {
        form.parse(req, async function (err, fields, file) {
            //path tmp trên server
            var object;
            var path = file.file.path;
            if (file.file.name.split('.')[1] !== 'png') {
                
                try {
                    fs.unlinkSync(path)
                    object = {
                        message: "Hiện tại hệ thống chỉ hỗ hệ ảnh file .PNG, ảnh bạn đang dùng là định dạng ." + file.file.name.split('.')[1],
                        status: "error"
                    }
                } catch (err) {
                    object = {
                        message: "Err",
                        err,
                        status: "error"
                    }
                }
            } else {
                //thiết lập path mới cho file
                var newpath = form.uploadDir + file.file.name;
                var nameNft = file.file.name.split('.')[0];

                fs.rename(path, newpath, function (err) {
                    if (err) return res.send({
                        message: err
                    });
                });
                creatNFT(newpath);
                const sql = `INSERT INTO images (id, name, link_img, link_nft, id_group) VALUES (NULL, '${file.file.name}', '${DOMAIN}/image/${file.file.name}', '${DOMAIN}/nft/${nameNft}', ${fields.idGroup})`;
                object = await new Promise(tv => {
                    cn.query(sql, (err, result) => {
                        if (err) return res.status(400).send(err);
                        object = {
                            message: "Bạn đã hoàn thành thiết lập",
                            name: file.file.name,
                            status: "done",
                            url: `${DOMAIN}/image/${file.file.name}`
                        };
                        tv(object);
                    })
                })
            }
            tv(object);
        });
    })
    res.send({
        object
    });
}

async function uploadVideo(req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = "./upload/videos/";
    //xử lý upload
    const object = await new Promise(tv => {
        form.parse(req, async function (err, fields, file) {
            // path tmp trên server
            var path = file.file.path;
            //thiết lập path mới cho file
            var newpath = form.uploadDir + file.file.name;
            fs.rename(path, newpath, function (err) {
                if (err) return res.send({
                    message: err
                });
            });
            var sql = `INSERT INTO contens (id, name, link_conten, id_img, type) VALUES (NULL, '${file.file.name}', '${DOMAIN}/video/${file.file.name}', '${fields.idGroup}', '${file.file.type}')`
            var object = await new Promise(tv => {
                cn.query(sql, (err) => {
                    if (err) return res.status(400).send(err);
                    object = {
                        message: "Bạn đã hoàn thành thiết lập",
                        status: 200
                    };
                    tv(object);
                })
            })
            tv(object);
        });
    });

    res.send({
        object
    });
}

function createGroup(req, res) {
    const { name } = req.body;
    var sql = "INSERT INTO `groups` (`name`) VALUES ('" + name + "')";
    console.log(sql);
    cn.query(sql, (err, result) => {
        console.log(err);
        if (err) return res.status(400).send(err);
        res.status(200).send({
            message: "Tạo thành công group: " + name,
            id_group: result.insertId
        })
    })
}

module.exports = {
    uploadImg,
    uploadVideo,
    createGroup
}
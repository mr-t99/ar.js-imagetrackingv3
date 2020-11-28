const fs = require('fs');
const db = require('../database/db');
const { query } = require('express');
const cn = db.createConnection();
const domain = 'http://localhost:3000'

function getGroupDatabase(req, res){
    var sql = `SELECT id, name FROM groups`;
    cn.query(sql, (err, result)=>{
        if(err) return res.status(400).send(err);
        if(Object.keys(result).length === 0){
            return res.status(404).send({
                message:"Không có Group nào"
            });
        }
        res.send(result)
    })
}

function getDataAr(req, res){
    const {idgroup} = req.params;
    const sql = `SELECT * FROM groups,images,contens WHERE groups.id=images.id_group AND images.id = contens.id AND groups.id = ${idgroup};`
    cn.query(sql, (err, rl)=>{
        if(err) return res.status(400).send(err);
        res.send(rl)
    });
}

module.exports = {
    getGroupDatabase,
    getDataAr
}
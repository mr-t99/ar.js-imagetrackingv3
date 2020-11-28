const express = require('express');
const router = express.Router();
const getcontent = require('../controller/getContent.Controller');

router.get('/group', (req, res)=>{
    getcontent.getGroupDatabase(req, res);
})

router.get('/arconten/:idgroup',(req, res)=>{
    getcontent.getDataAr(req, res);
});
module.exports = router;
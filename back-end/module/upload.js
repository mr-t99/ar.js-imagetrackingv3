const express = require('express');
const router = express.Router();
const uploadController = require('../controller/upload.Controller');

router.post('/image', (req, res) => {
    uploadController.uploadImg(req, res);
})

router.post('/video', (req, res)=>{
    uploadController.uploadVideo(req, res);
})

router.post('/creategroup', (req, res)=>{
    uploadController.createGroup(req, res);
})

module.exports = router;
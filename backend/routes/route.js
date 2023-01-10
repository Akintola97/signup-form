const express = require('express');
const formRouter = express.Router();
const formTemplateCopy = require('../models/formModel');


formRouter.post('/form', (req, res) =>{
   const users = new formTemplateCopy({
        fullname:req.body.fullname,
        username:req.body.username,
        email:req.body.email,
        password: req.body.password
    })
    users.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})



module.exports = formRouter
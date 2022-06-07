const express = require('express');
const router = express.Router();
const axios = require('axios');
const Link = require('../models/Link');
const customLink = require('../controllers/CustomLink');

// router.get('/customLink', customLink);
router.post('/links/bulk', async (req, res) => {
    const links = req.fields.links;
    for(let i = 0; i < links.length; i++) {
        try{
            await Link.create(links[i]);
            console.log(`Link created`);
        }catch(err){
            console.log(err);
        }
    }
    res.sendStatus(200);
});
router.get('/links/:page',async (req, res) => {
    const page = req.params.page;
    const links = await Link.findAll({
        limit: 100,
        offset: (page - 1) * 100,
    });
    res.json(links);
});
router.put('/links/:id', async (req, res) => {
    const id = req.params.id;
    const status = req.fields.status;
    // console.log(req.fields.status);
    const link = await Link.findByPk(id);
    link.status = status;
    await link.save();
    res.json(link);
});

router.use('/',(req,res)=>{console.log('wrong api url');res.sendStatus(404);});
module.exports=router;
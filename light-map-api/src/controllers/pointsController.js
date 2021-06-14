const express = require('express');
const LightPoint = require('../models/light-point');
const router = express.Router();
//const knotClient = require('../services/knot-service')


router.post('/create', async (req, res) => {
    try {
        const lightPoint = await LightPoint.create(req.body);
        return res.send({ lightPoint })
    }catch (err) {
        return res.status(400).send({ error: `Error creating new point: ${err}`});
    }
});

router.get('/', async (req, res) => {
    try {
        //knotClient.getData();
        const lightPoint = await LightPoint.find();
        return res.send( lightPoint )
    }catch (err) {
        return res.status(400).send({ error: `Error creating new point: ${err}`});
    }
});

module.exports = app => app.use('/point', router);

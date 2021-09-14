const { Router } = require('express');
const axios = require('axios');
const { Tipos } = require('../db');

const router = Router();

router.get('/tipos', (req, res) => {
    res.send('Hola Tipo!!!');
});

module.exports = router;
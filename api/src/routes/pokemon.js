const { Router } = require('express');
const axios = require('axios');
const { Pokemon } = require('../db');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hola Home!!!');
});

router.get('/:id', (req, res) => {
    res.send('Hola Id::::');
});

router.post('/', (req, res) => {
    res.send('Hola Post.');
});
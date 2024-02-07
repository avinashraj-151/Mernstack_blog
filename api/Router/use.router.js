const express = require('express')
const test = require('../Controller/user.controller')
const router = express.Router()
const Person = require('../Modal/user.modal')

router.get('/', test)

module.exports = router

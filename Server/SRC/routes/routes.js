const express = require('express')
const promptController = require('../controler/prompt-controler')
const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)

module.exports = routes
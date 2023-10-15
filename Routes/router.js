const router = require('express').Router()
const {getGames, pushGames} = require('../Controller/controller')

router.get('/', getGames)
router.post('/post',pushGames )
module.exports = router
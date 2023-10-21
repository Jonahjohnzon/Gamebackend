const router = require('express').Router()
const {getGames, pushGames, getT, pustT, getImage, postImage, postLogin, postUser} = require('../Controller/controller')
const verifyJwt = require('../Controller/verify')

router.get('/get', getGames)
router.post('/post',verifyJwt,pushGames )
router.get('/tournament', getT)
router.post('/tpost',verifyJwt, pustT)
router.get('/image', getImage)
router.post('/image',verifyJwt, postImage)
router.post('/loginad', postLogin)
router.post('/usercreate', postUser)
module.exports = router
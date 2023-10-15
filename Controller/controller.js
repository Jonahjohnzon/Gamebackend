const gamecomicSchema = require('../Schema/schema')
const getGames = async(req, res) =>{
    const gets = await gamecomicSchema.find({})
    try{
        return res.status(201).json(gets)
    }
    catch(err)
    { return res.json(err)}
}

const pushGames = async(req, res) =>{
    const creategame = await gamecomicSchema.create({
        title:req.body.title,
        developers : req.body.developers,
        price : req.body.price,
        images : req.body.images,
        avatar : req.body.avatar,
        country : req.body.country,
        comment : req.body.comment,
        cate :{
            action:req.body.cate.action,
            adventure:req.body.cate.adventure,
            rpg:req.body.cate.rpg,
            arcade:req.body.cate.arcade,
            puzzle:req.body.cate.puzzle,
            storyline:req.body.cate.storyline
        },
        rate : req.body.rate,
        art : req.body.art,
        category : req.body.category
    })

    await creategame.save()
    try{
        return res.json('Post Successful')
    }
    catch(err)
    { return res.json(err)}
}

module.exports = {
    getGames,
    pushGames
}
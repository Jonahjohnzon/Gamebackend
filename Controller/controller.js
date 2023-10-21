
const {gamecomicSchema, picture, users,} = require('../Schema/schema')
const {tournament} = require('../Schema/schema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



const getImage = async(req, res) =>{
    const gets = await picture.find({})
    try{
        res.json(gets)
    }
    catch(err)
    {
        res.json(err)
    }
}

const postImage = async(req, res) =>{
    const post = await picture.create({
        image : req.body.image
    })
    await post.save()
    try{
        res.json('successful')
    }
    catch(e)
    {
        res.json(e)
    }
}
const getGames = async(req, res) =>{
    const query = req?.query?.limit
    const cate = req?.query?.cate
    var gets;
    if(cate)
    {
     gets = await gamecomicSchema.find({"category":cate}).limit(query)
    }
    else{
    gets = await gamecomicSchema.find({}).limit(query) 
    }
    const count = await gamecomicSchema.countDocuments({})
    const pictures = await picture.find({})
    try{
        const data = []
        const gett = await tournament.find({})

        try{
            const result = data.concat({t:gett},{g:gets},{c:count},{p:pictures})
        return res.status(201).json(result)
        }
        catch(err)
        {
           return res.json(err) 
        }
    }
    catch(err)
    { return res.json(err)}
}

const postLogin = async(req, res) =>{
            const user = await users.findOne({'email': req.body.email.toUpperCase()})
            if (user == null)
            {
                return res.json({auth :false, result :'No such user'})
            }
            const result = await bcrypt.compare(req.body.password , user.password )
            if (result)
            {
                const id = user._id
               const token = jwt.sign({id}, process.env.JWT,{
                expiresIn:10000,
               })
               const userdata = {email:user.email , _id:user._id}
               console.log(userdata)
               res.json({auth: true, token:token, userdata : userdata })
            }
            else{
                
                return res.json({auth:false, result:'password wrong'})
            }
}

const postUser = async(req,res)=>{
    const pass = req.body.password
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(pass,salt)
    const user = await users.create({
        email : req.body.email.toUpperCase(),
        password :hash 
    })
    const data = await user.save()
    try{
        res.json(data)
    }
    catch(e)
    {return res.json(e)}
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
        category : req.body.category,
        link: req.body.link,
        sale: req.body.sale
    })

    await creategame.save()
    try{
        return res.json('Post Successful')
    }
    catch(err)
    { return res.json(err)}
}
const getT = async(req, res) =>{
    const gettournament = await tournament.find({})
    try{
        return res.status(201).json(gettournament)
    }
    catch(err)
    { return res.json(err)}
}
const pustT = async(req, res) =>{
    
    const pushresult = await tournament.create({
        name:req.body.name,
        location:req.body.location,
        date:req.body.date,
        avatar:req.body.avatar,
        link:req.body.link
    })
    await pushresult.save()
    try{
        return res.json('Post Successful')
    }
    catch(err)
    { return res.json(err)}
}

module.exports = {
    getGames,
    pushGames,
    getT,
    pustT,
    getImage,
    postImage,
    postLogin,
    postUser
}
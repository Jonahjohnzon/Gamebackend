const mongoose = require('mongoose')

const cates = mongoose.Schema({
    action:{type:Boolean},
    adventure:{type:Boolean},
    rpg:{type:Boolean},
    arcade:{type:Boolean},
    puzzle:{type:Boolean},
    storyline:{type:Boolean}
})

const gamecomicSchema = mongoose.Schema({
        title:{
            type:String
        },
        developers:{
            type:String
        },
        developers:{
            type:String
        },
        price:{
            type:Number
        },
        images:{
            type:String
        },
        avatar:{
            type:String
        },
        country:{
            type:String
        },
        comment:{
            type:String
        },
        rate:{
            type:Number
        },
        cate:cates,
        category:{
            type:String
        },
        art:{
            type:String
        }
})
module.exports = mongoose.model('gamescomics',gamecomicSchema)
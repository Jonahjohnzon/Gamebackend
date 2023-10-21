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
        },
        
        link:{
            type:String
        },
        sale:{
            type:Number
        }
})


const tournament = mongoose.Schema({
    name:{
        type:String
    },
    location:{
        type:String
    },
    date:{
        type:String
    },
    avatar:{
        type:String
    },
    link:{
        type:String
    }
})
const picture = mongoose.Schema({
    image : {
        type : String
    }
})
const users = mongoose.Schema({
    email : {
        type:String
    },
    password : {type:String}
})
module.exports.gamecomicSchema = mongoose.model('gamescomics',gamecomicSchema)
module.exports.tournament = mongoose.model('tournament', tournament)
module.exports.picture = mongoose.model('picture', picture)
module.exports.users = mongoose.model('users', users)
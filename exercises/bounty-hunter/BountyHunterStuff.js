
//SERVER STUFF//

const express = require('express')
const app = express()
const mongoose = require ("mongoose")
const port = 6969

app.use(express.json())

app.use('/api/bounties', require('./routes/bountyRoutes'))

mongoose.connect("mongodb://localhost:27017/bounties", {useNewUrlParser: true})
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

//SCHEMA STUFF

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    firstName: String, 
    lastName: String,
    isJedi: String,
    living: {
        type: Boolean,
        default: true
    },
    bountyAmount: Number,
    image: {
        type: String,
        default: "imageUrl"
    }
})

module.exports = mongoose.model("Bounty", bountySchema)

//BOUNTY ROUTES

const express = require("express")
const bountyRoute = express.Router()
const Bounty = require('../models/bountyModel')

bountyRoute.route('/')
    .get((req, res) =>{
        Bounty.find((err, bounties) =>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(bounties)
        })
    })
    .post((req, res) => {
        // const newBountyInfo = re.body
        // const newBounty = new Bounty(newBountyInfo)
        const newBounty = new Bounty(req.body)
        newBounty.save(err => {
            err && res.status(500).send(err)
            return res.status(200).send(newBounty)
        })
    })

bountyRoute.route('/:id')
    .put((req, res) => {
        // const {id} = req.params
        const data = req.body
        Bounty.findByIdAndUpdate(
            {_id: req.params.id},
            req.body,
            (err, bounty) => {
                err && res.status(500).send(err)
                return res.status(200).send("Successfully added!")
            }
        )
    })

    .delete((req, res) => {
        Bounty.findOneAndDelete(
            {_id: req.params.id},
            (err, bounty) => {
                err && res.status(500).send(err)
                return res.status(200).send("Successfully deleted!")
            }
        )
    })

    .get((req, res) => {
        Bounty.findById(
            {_id: req.params.id},
            (err, bounty) => {
                err && res.status(500).send(err)
                return res.status(200).send(bounty)
            }
        )
    })

module.exports = bountyRoute
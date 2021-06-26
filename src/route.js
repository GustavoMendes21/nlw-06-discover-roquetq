const express = require('express')

const QuestionController = require("./controller/QuestionController")
const RoomController = require('./controller/RoomController')

const route = express.Router()

route.get("/", (req, res) => res.render("index", {page: 'enter-room'}))
route.get("/create-pass", (req, res) => res.render("index", {page: 'create-pass'}))
route.get("/room/:room", (req, res) => res.render("room"))

route.post("/question/:room/:question/:action", QuestionController.index)
route.post("/create-room", RoomController.create)

module.exports = route
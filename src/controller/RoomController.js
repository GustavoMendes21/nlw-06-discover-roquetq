const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let roomId = null

        for(let i = 0; i < 6; i++){
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : 
            roomId += Math.floor(Math.random() * 10).toString()
        }

        db.run(`INSERT INTO rooms (
            id,
            pass
        ) VALUES  (
            ${parseInt(roomId)},
            ${pass}  
        ) `)

        res.redirect(`/room/${roomId}`)
    }   
}
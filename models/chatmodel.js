const mongoose = require("mongoose")

const chatschema = new mongoose.Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    reciever_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    msg: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.Model("Chat", chatschema)
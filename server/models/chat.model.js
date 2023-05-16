const mongoose = require("mongoose");

const Chat = mongoose.model("Chat", new mongoose.Schema({
    chatname: String,
    participants: [String],
    owner: String,
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }]
}))

module.exports = Chat;

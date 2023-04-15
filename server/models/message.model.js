const mongoose = require("mongoose");

const Message = mongoose.model("Message", new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content: String,
    sendDate: Date,
    readBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }]
}))

module.exports = Message;

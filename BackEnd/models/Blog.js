const { Schema, default: mongoose } = require("mongoose");

const BlogSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
        //ref: "users": This tells Mongoose that the ObjectId is not random. It refers to a document (record) in the "users" collection. So, whenever you query the database, Mongoose knows this user field links to a specific user in the "users" collection.
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("blogs", BlogSchema)
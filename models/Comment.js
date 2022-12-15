import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
})

const comment = mongoose.model("Comment", commentSchema)

export default comment
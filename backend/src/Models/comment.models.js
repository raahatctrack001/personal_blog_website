import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        default: null,
    },
    replies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    edited:{
        type:Boolean,
        default: false,
    }

}, {timestamps: true})

const Comment = new mongoose.model("Comment", commentSchema);
export { Comment }
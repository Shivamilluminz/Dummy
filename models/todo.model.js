import mongoose, { Schema } from "mongoose";


const TodoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Todo", TodoSchema)



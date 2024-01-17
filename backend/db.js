const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://akhilpatilbagili:Akhil18133@cluster0.uuvljkz.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports= {
    todo
}
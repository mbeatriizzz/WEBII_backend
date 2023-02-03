import mongoose from "mongoose"

mongoose.connect('mongodb+srv://Beatriz:125912@cluster0.r7g6xmc.mongodb.net/?retryWrites=true&w=majority')

let db = mongoose.connection

export default db
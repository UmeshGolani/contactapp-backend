import mongoose from 'mongoose'


const ContactSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    contactno: [{type: Number, required: true, trim: true, unique: true}],
    photo: {type: String},

}, {timestamps: true})



const Contact = mongoose.model('contact', ContactSchema)

export default Contact
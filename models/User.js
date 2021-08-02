const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema de la tabla usuarios
// autor: @marcoxavi
const UserSchema = new Schema({
    name: {type: String},
    username: { type: String},
    age: { type: String},
    address: { type: String},
    telephone: { type: String},
    email:{ type: String},
    password: { type: String}
   
});

module.exports = User = mongoose.model('Users', UserSchema);
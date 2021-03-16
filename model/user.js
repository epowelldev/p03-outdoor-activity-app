var mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    events: [{
        type: Schema.Types.ObjectId,
        ref: "Events"
    }]


});

UserSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

UserSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('no password')
        next()
    } else {
        console.log('Hashpassport pre save');
        this.password = this.hashPassword(this.password)
        next()
    }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;
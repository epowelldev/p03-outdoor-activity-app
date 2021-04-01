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
        required: [true, 'firstname required']
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
        match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
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

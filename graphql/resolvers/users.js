const bctypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

module.exports = {
    Mutation: {
        async register(_, {registerInput: {username, email, password, confirmPassword} }, context, info) {
            // TODO: Validate user data
            // TODO: Make sure user doesnt already exist
            // TODO: hash password and create an auth token
            password = await bctypt.hash(password, 12);

            const newUSer = new User({
                email,
                username, 
                password,
                createAt: new Date().toISOString()
            });

            const res = await newUSer.save();
        }
    }
}
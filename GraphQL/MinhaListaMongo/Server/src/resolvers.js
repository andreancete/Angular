const users = require('./user.js');
const user = require('./user.js');
   

module.exports = {
    Query: {
        users: () => user.find(),
        user: (_, {id}) => {
            return users.findById[id];
        },

    },

    Mutation: {
        createUser: (_, {nome, login}) => {user.create({nome,email}) },
    },

};
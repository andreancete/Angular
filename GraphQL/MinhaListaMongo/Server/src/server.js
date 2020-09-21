const {GraphQLServer} = require ('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

/*falta levantar o bando mongo db*/
mongoose.connect("mongodb://localhost:27017/graphqlnode", {
    useNewUrlParser:true
})

const server = new GraphQLServer({
    typeDefs : path.resolve(__dirname,'schema.graphql'), 
    resolvers
});

server.start();

"use strict";
const graphql = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema } = graphql;
const { query } = require("./schemas/query");

const schema = new GraphQLSchema({
    query
});

var app = express();
app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);

app.listen(3000, () => {
    console.log("GraphQL Server running on Port 3000");
});
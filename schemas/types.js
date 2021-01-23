const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const CisType = new GraphQLObjectType({
    name: "Cis",
    type: "Query",
    fields: {
        gender: { type: GraphQLString },
        ageGroup: { type: GraphQLString },
        credits_attempted: { type: GraphQLString },
        credits_passed: { type: GraphQLString },
        gpa: { type: GraphQLString },
        gradYear: { type: GraphQLString },
        home: { type: GraphQLString },
        major: { type: GraphQLString }
    }
});

exports.CisType = CisType;
const { db } = require("../pgAdaptor");
const { GraphQLObjectType, GraphQLString } = require("graphql");
const { CisType } = require("./types");
const { buildResolveInfo } = require("graphql/execution/execute");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
        cis: {
            type: CisType,
            args: { major: { type: GraphQLString } },
            resolve(parentValue, args) {
                const query = "Select * FROM cis2019 WHERE Major='Information Systems'";
                const values = [args.major];

                return db
                    .query(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        }
    }
});

exports.query = RootQuery;
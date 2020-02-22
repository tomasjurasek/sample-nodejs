import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer, gql} from 'apollo-server-express';
import {Parking} from './models/parking';

const app = express();


mongoose.Promise = global.Promise;

const url = 'CONNECTION_STRING';

mongoose.connect(url, { useNewUrlParser: true });

const typeDefs = gql`
    type Parking {
        int: String,
        user: String,
        from: String,
        to: String
    }

    type Query {
        getParkings: [Parking]
    }
`;

const resolvers = {
    Query: {
        getParkings: async () => await Parking.find({}).exec()
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });


app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
);
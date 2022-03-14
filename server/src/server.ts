import express from "express";
import http from "http";

import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";

import { config } from "./config";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";

import * as routes from "./routes";

export async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  // Graphql
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });

  // Routes
  app.use("/auth", routes.authRoutes);

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: config.PORT_APP }, resolve)
  );
  console.log(`🚀 Server ready at http://${config.HOST_APP}:${config.PORT_APP}${server.graphqlPath}`);
}

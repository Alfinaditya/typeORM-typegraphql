import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import cookieParser from 'cookie-parser';
import resolvers from './modules';

async function startApolloServer() {
	await createConnection();
	const schema = await buildSchema({
		resolvers,
	});
	const allowedDomains = [
		'http://localhost:3000',
		'https://studio.apollographql.com',
	];
	const app = express();
	app.use(cookieParser());
	app.get('/', (_req, res) => {
		res.send('server running on express');
	});
	const server = new ApolloServer({
		schema,
		context: ({ req, res }) => ({ req, res }),
	});
	await server.start();
	server.applyMiddleware({
		app,
		cors: {
			credentials: true,
			origin: allowedDomains,
		},
	});
	app.listen(3001, () => {
		console.log(
			`🚀 Server ready at http://localhost:3001${server.graphqlPath}`
		);
	});
}
startApolloServer();

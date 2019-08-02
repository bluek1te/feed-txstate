let makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
let typeDefs = `
type arrival {
	id: String!
	date_time: String
	step: String
	category: String
	temperature: String
	weight: String
	weight_minimum: String
	cart: String
	cart_weight: String
	route: String
	route_stops: String
	distribution_day: String
	distribution_site: String
	distribution_type: String
	distribution_notes: String
	clients_projection: String
	clients_served: String
}

input arrival_input {
	id: String!
	date_time: String
	step: String
	category: String
	temperature: String
	weight: String
	weight_minimum: String
	cart: String
	cart_weight: String
	route: String
	route_stops: String
	distribution_day: String
	distribution_site: String
	distribution_type: String
	distribution_notes: String
	clients_projection: String
	clients_served: String
}

type departure {
	id: String!
	date_time: String
	step: String
	category: String
	temperature: String
	weight: String
	weight_minimum: String
	cart: String
	cart_weight: String
	route: String
	route_stops: String
	distribution_day: String
	distribution_site: String
	distribution_type: String
	distribution_notes: String
	clients_projection: String
	clients_served: String
}

input departure_input {
	id: String!
	date_time: String
	step: String
	category: String
	temperature: String
	weight: String
	weight_minimum: String
	cart: String
	cart_weight: String
	route: String
	route_stops: String
	distribution_day: String
	distribution_site: String
	distribution_type: String
	distribution_notes: String
	clients_projection: String
	clients_served: String
}

type Query {
	arrival(id: String!): arrival
	arrivals(limit: Int): [arrival]
	departures(limit: Int): [departure]
	departure(id: String!): departure
}

type Mutation {
	addArrival(post: arrival_input!): arrival
	addDeparture(post: departure_input!): departure
}
`;


let getAllDepartures = (obj, args, context, info) => {
	const limitInput = args.limit || '10';
	const limit = parseInt(limitInput);

	const array = [];
	for (let i = 0; i < limit; i++) {
		array.push({
			id: i,
			date_time: "Test Date"
		});
	}
	return array;
};

let getAllArrivals = (obj, args, context, info) => {
	const limitInput = args.limit || '10';
	const limit = parseInt(limitInput);

	const array = [];
	for (let i = 0; i < limit; i++) {
		array.push({
			id: i,
			date_time: "Test Date"
		});
	}
	return array;
};


let getDeparture = (obj, args, context, info) => {

	return {
		id: args.id,
		step: "Hi"
	};

};

let getArrival = (obj, args, context, info) => {

	return {
		id: args.id,
		step: "Hi"
	};

};


let addDeparture = (obj, args, context, info) => {

	return args.post;

};

let addArrival = (obj, args, context, info) => {

	return args.post;

};


let resolvers = {
	Query: {
		departures: getAllDepartures,
		departure: getDeparture,
		arrivals: getAllArrivals,
		arrival: getArrival
	},
	Mutation: {
		addDeparture: addDeparture,
		addArrival: addArrival
	}
};


module.exports = makeExecutableSchema({
	typeDefs: typeDefs,
	resolvers: resolvers
});

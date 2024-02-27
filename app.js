const fastify = require('fastify')({
	logger: process.argv[2] === '--dev'
})

fastify.get("/discord", (req, res) => {
	console.log(req.query);
})

fastify.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
	if (err) throw err
	console.log(`Server listening on ${address}`);
})
const fastify = require('fastify')({
	logger: process.argv[2] === '--dev'
})
const cors = require('@fastify/cors');
fastify.register(cors, {
	origin: "*"
});

require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({ partials: Object.values(Object.fromEntries(new Map(Object.entries(Discord.Partials).filter((e) => Number.isInteger(e[1]))))),  intents: Object.values(Object.fromEntries(new Map(Object.entries(Discord.GatewayIntentBits).filter((e) => Number.isInteger(e[1]))))) });

fastify.get("/discord", async (req, res) => {
	let id = req.query.i;
	if (!id) return res.send({ error: "No id provided" });
	let user;
	if (client.users.cache.has(id)) user = client.users.cache.get(id);
	else user = await client.users.fetch(id);
	if (!user) return res.send({ error: "User not found" });

	let guild = client.guilds.cache.get(process.env.DISCORD_GUILD);
	if (!guild) return res.send({ error: "Guild not found" });
	let member = guild.members.cache.get(user.id);
	if (!member) return res.send({ error: "Member not found" });

	let username = user.username;
	let avatar = user.avatarURL({ dynamic: true, size: 4096 });

	let status;
	if (!member.presence.activities[0]) status = "";
	else status = member.presence.activities[0].state;

	res.send({ username, avatar, status });
})

fastify.get("/", (req, res) => {
	res.send({ message: "Hello, I'm a API for Leonis :)", leonis: true });
})

fastify.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" }, (err, address) => {
	if (err) throw err
	console.log(`Server listening on ${address}`);
	client.login(process.env.DISCORD_TOKEN);
})
const path = require("path");
const fastify = require("fastify")({ logger: true });
const fastifyStatic = require("@fastify/static");

fastify.get("/slides/presenter/*", (req, res) => {
  res.sendFile("index.html");
});

fastify.register(fastifyStatic, {
  root: path.join(__dirname, "../slidev/dist"),
  prefix: "/slides/",
});

fastify.get("/*", (req, res) => {
  res.sendFile("index.html");
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

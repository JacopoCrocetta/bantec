import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";

const healthCheck = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.code(200).send({ res: true });
};

export const healthCheckRouter = (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  fastify.route({
    method: "GET",
    url: "/healthz",
    handler: healthCheck,
  });

  done();
};

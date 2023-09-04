import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";

export const bantecControllerRoutes = (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  fastify.route({
    method: "GET",
    url: "/get-all-transaction",
    handler: async (request: FastifyRequest, reply: FastifyReply) => {},
  });
};

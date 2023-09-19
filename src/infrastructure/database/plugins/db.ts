import { FastifyInstance, FastifyPluginOptions } from "fastify";

export const dbPool = (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) => {};

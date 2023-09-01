import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import fastify, {FastifyInstance} from 'fastify';
import fastifyPlugin from "fastify-plugin";

import * as Controller from "./infrastructure/controller/routes";

export function getFastifyServer(): FastifyInstance {
    const app = fastify({ logger: true })
        .withTypeProvider<TypeBoxTypeProvider>();

        return app
        .register(fastifyPlugin(Controller.healthCheckRouter));
}
import { FastifyReply, FastifyRequest } from "fastify";
import { Pool } from "pg";
import BantecPresenter from "src/infrastructure/presenter/bantec-presenter/bantec.presenter";

declare module 'fastify'{
    export interface FastifyInstance{
        config: { get: (key: string) => string | undefined },
        pgPool: Pool,
        apiKeyAuth: (fastifyInstance: FastifyInstance, request: FastifyRequest, reply: FastifyReply, done: (err?: Error) => void) => void,
        readyDevicePresenter: BantecPresenter;
    }
}
import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";

export const apiKeyAuth = (fastifyInstance: FastifyInstance, request: FastifyRequest, reply: FastifyReply, done: (err?: Error) => void) => {

    const incomingApiKey = request.headers['platform-svc-api-key'];
    const apiKey = fastifyInstance.config.get('PLATFORM_SVC_API_KEY');

    done(incomingApiKey === apiKey ? undefined : Error());

}

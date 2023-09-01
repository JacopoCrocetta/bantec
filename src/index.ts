import { getFastifyServer } from "./fastify";


const port = +(process.env.PORT ?? 4000);

async function main() {
    const app = await getFastifyServer();
    await app.listen({ port, host: '0.0.0.0'});
    app.log.info(`Fastify listen on port ${port}`);
}

main().catch(console.error);

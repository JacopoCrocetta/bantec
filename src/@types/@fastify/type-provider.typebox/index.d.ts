import {FastifySchema} from "fastify/types/schema";
import {
    ContextConfigDefault,
    FastifyReply,
    FastifyRequest,
    RawReplyDefaultExpression,
    RawRequestDefaultExpression,
    RawServerDefault
} from "fastify";
import {RouteGenericInterface} from "fastify/types/route";
import {TypeBoxTypeProvider} from "@fastify/type-provider-typebox";

declare module '@fastify/type-provider-typebox' {

    export type FastifyRequestTypebox<TSchema extends FastifySchema> = FastifyRequest<
        RouteGenericInterface,
        RawServerDefault,
        RawRequestDefaultExpression<RawServerDefault>,
        TSchema,
        TypeBoxTypeProvider
    >;

    export type FastifyReplyTypebox<TSchema extends FastifySchema> = FastifyReply<
        RawServerDefault,
        RawRequestDefaultExpression,
        RawReplyDefaultExpression,
        RouteGenericInterface,
        ContextConfigDefault,
        TSchema,
        TypeBoxTypeProvider
    >

}

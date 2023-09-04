import passport from "@fastify/passport";
import { HeaderAPIKeyStrategy } from "passport-headerapikey";
import { fastifyPlugin } from "fastify-plugin";
import { FastifyInstance, FastifyPluginOptions } from "fastify";

export async function auth(fastify: FastifyInstance, options: FastifyPluginOptions) {
  passport.registerUserSerializer(async (apiKeys, request) => user);


  const apiKeys = {
    ca03na188ame03u1d78620de67282882a84: "cep-triggers",
    d2e621a6646a4211768cd68e26f21228a81: "cep-devices",
  };

  let user = {};

  passport.use(
    "test",
    new HeaderAPIKeyStrategy(
      { header: "Authorization", prefix: "" },
      false,
      function (apikey, done) {
        if (apikey in apiKeys) {
          
          done(null, apiKeys);
        } else {
          done( Error("invalid key"));
        }

        
        return done;
      }
    )
  );
}

fastifyPlugin(auth);
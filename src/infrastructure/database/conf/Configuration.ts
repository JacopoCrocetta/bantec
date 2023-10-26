import * as dotenv from "dotenv";
import { IConfigFile } from "src/@types";

dotenv.config();
const { env } = process;

export const CONFIG: IConfigFile = {
  nodeEnv: "",
  port: "",
  jwt_encryption: "",
  jwt_expiration: 0,
  apiKey: "",
  logging: {
    level: env.LOG_LEVEL as string,
    useFileAppender: false,
    prefix: "",
    logsFolder: env.LOG_PATH as string,
    fileName: "",
    maxFiles: 0,
    maxSize: 0,
  },
  infraServices: {
    jwtToken: {
      email: "",
      password: "",
      audience: "",
    },
  },
  mongo: {
    debug: false,
    address: "",
    database: "",
    user: "",
    password: "",
    maxConnectionAttempt: 0,
    connectionRetryTimeout: 0,
  },
  db: {
    db_dialect: undefined,
    db_name: "",
    db_user: "",
    db_password: "",
    db_options: {
      host: "",
      port: 0,
      readHost: "",
      writeHost: "",
    },
  },
};

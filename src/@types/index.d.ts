export interface IConfigFile {
  nodeEnv: string;
  port: string;
  jwt_encryption: string;
  jwt_expiration: number;
  apiKey: string;
  logging: {
    level: string;
    useFileAppender: boolean;
    prefix: string;
    logsFolder: string;
    fileName: string;
    maxFiles: number;
    maxSize: number;
  };
  infraServices: {
    jwtToken: {
      email: string;
      password: string;
      audience: string;
    };
  };
  mongo: {
    debug: boolean;
    address: string;
    database: string;
    user: string;
    password: string;
    maxConnectionAttempt: number;
    connectionRetryTimeout: number;
  };
  db: {
    db_dialect: any;
    db_name: string;
    db_user: string;
    db_password: string;
    db_options?: {
      host?: string;
      port: number;
      readHost?: string;
      writeHost?: string;
    };
  };
  redis: {
    keyPrefixPermission: string;
    keyPrefix: string;
    cacheDisabled: boolean;
    options: {
      password: string;
      name: string;
      sentinels: [
        {
          host: string;
          port: number;
        }
      ];
    };
  };
}

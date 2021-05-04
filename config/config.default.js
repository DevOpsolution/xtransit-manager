/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.keys = appInfo.name + '_1589386223046_7287';

  config.middleware = [];

  config.security = {
    csrf: {
      ignore: [
        '/xtransit',
        '/xprofiler',
      ],
    },
  };

  config.secure = {
    secret: 'easy-monitor::xprofiler',
  };

  config.development = {
    watchDirs: ['lib'],
  };

  config.view = {
    mapping: { '.html': 'ejs' },
  };

  config.bodyParser = {
    jsonLimit: '10mb',
    formLimit: '10mb',
  };

  config.httpTimeout = 15000;

  config.appsKey = 'XTRANSIT_APP';

  config.clientsPrefix = 'XTRANSIT_CLIENT::';

  config.logsKey = 'XTRANSIT_LOG';

  config.logsPrefix = 'XTRANSIT_LOG_FILE::';

  config.errorLogPrefix = 'XTRANSIT_ERROR_LOG::';

  config.errorLogLimit = 5000;

  config.errorLogStorage = 7;

  config.packagePrefix = 'XTRANSIT_PKG_LOG::';

  config.packageStorage = 7;

  config.packageQueueKey = 'XTRANSIT_PKG_QUEUE';

  config.packageAuditPrefix = 'XTRANSIT_PKG_AUDIT::';

  config.packageAuditStorage = 90 * 60;

  config.processHistoryStorage = 8;

  config.npmRegistry = 'https://registry.npmjs.org';

  config.debounceFlagPrefix = 'XTRANSIT_DEBOUNCE_FLAG::';

  config.debounceListPrefix = 'XTRANSIT_DEBOUNCE_LIST::';

  config.debounceWait = 5 * 60;

  config.messageLimitPrefix = 'XTRANSIT_MESSAGE_LIMIT::';

  config.messageLimit = {
    mailer: 20,
  };

  const userConfig = {};

  // mysql
  userConfig.mysql = {
    app: true,
    agent: false,
    clients: {
      xprofiler_console: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_CONSOLE_DATABASE,
      },
      xprofiler_logs: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_LOGS_DATABASE,
      },
    },
  };

  // redis
  userConfig.redis = {
    client: {
      sentinels: null,
      port: process.env.REDIS_PORT,
      host: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
      db: 0,
    },
  };

  // mailer
  userConfig.mailer = {
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: false,
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  };

  userConfig.xprofilerConsole = process.env.XPROFILER_CONSOLE_URL;

  return {
    ...config,
    ...userConfig,
  };
};

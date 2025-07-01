import pino, { type Logger } from 'pino';
import { format } from 'date-fns';

// TARGET_ENV = 'local' | 'staging' | production
const isProduction = process.env.NODE_ENV === 'production';

// ANSI color codes for console output
const COLOR = {
  RESET: '\x1b[0m',
  BRIGHT: '\x1b[1m',
  DIM: '\x1b[2m',
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  MAGENTA: '\x1b[35m',
  CYAN: '\x1b[36m',
  WHITE: '\x1b[37m',
  GRAY: '\x1b[90m',
} as const;

const getLevelColor = (level: string): string => {
  switch (level) {
    case 'ERROR':
      return COLOR.RED;
    case 'WARN':
      return COLOR.YELLOW;
    case 'INFO':
      return COLOR.BLUE;
    case 'DEBUG':
      return COLOR.GRAY;
    case 'TRACE':
      return COLOR.DIM;
    default:
      return COLOR.WHITE;
  }
};

const baseConfig = {
  level: isProduction ? 'info' : 'debug',
  browser: {
    write: (logObj: unknown) => {
      const { level, msg, group, time, icon } = logObj as Record<
        string,
        string
      >;

      const levelUpperCased = level.toUpperCase();
      const timeFormatted = format(new Date(time), `HH:mm:ss.sss`);
      const levelColor = getLevelColor(levelUpperCased);

      console.log(
        `[${timeFormatted}] ${levelColor}${levelUpperCased} ${COLOR.CYAN}[${
          icon ?? ''
        } ${group ?? ''}] ${msg} ${COLOR.WHITE}`
      );
    },
    formatters: {
      level: (label: string) => {
        return {
          level: label,
        };
      },
    },
  },
};

const logger: Logger = pino({
  ...baseConfig,
  enabled: !isProduction,
});

export { logger };

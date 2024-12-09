import packageJson from '../../package.json';

// environment variables
const env = {
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
  BASE_URL: import.meta.env.VITE_BASE_URL,
};

// default configurations
const config = {
  mode: 'development',
  appVersion: packageJson.version,

  // table
  table: {
    defaultLimit: 10,
    maxLimit: 999999,
  },

  // theme
  theme: {
    colors: {
      primary: 'hsl(var(--primary))',
    },
    screenSizes: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
    },
  },

  // antd

  antd: {
    theme: {
      token: {
        colorPrimary: '#19d3c5',
        colorInfo: '#1677ff',
      },
    },
  },

  env,
};

export default config;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Config = DeepPartial<typeof config>;

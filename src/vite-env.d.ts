/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ImportMetaEnv {
  readonly VITE_PORT: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_SOURCE_MAP: string;
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

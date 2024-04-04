/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TILE_LAYER_URL: string;
  readonly VITE_PLACES_API_KEY: string;
  readonly VITE_PLACES_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
